import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mobile/model/task.dart';
import 'package:mobile/views/widget/taskCard.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';


class HomeLayout extends StatefulWidget {
  @override
  State<HomeLayout> createState() => _HomeLayoutState();
}

class _HomeLayoutState extends State<HomeLayout> {
  late List<Task> tasks = <Task>[];
  late int skip = 0;
  RefreshController refreshController = RefreshController(initialRefresh: true);

  void onRefresh() async {
    // For user experience
    await Future.delayed(Duration(seconds: 2));

    List<Task> responseTasks = await Task.getTasks();
    setState(() {
      tasks = responseTasks;
    });
    refreshController.refreshCompleted();
  }

  void onLoading() async {
    // For user experience
    await Future.delayed(Duration(seconds: 3));
    List<Task> responseTask = await Task.getTasks(
      skip: tasks.length,
    );
    if (responseTask.isNotEmpty) {
      setState(() {
        tasks.addAll(responseTask);
      });
    }

    refreshController.loadComplete();
  }

  Future<void> onAddNewTask(String title) async {
    // For user experience
    await Future.delayed(Duration(seconds: 1));
    Task task = await Task.createTask(title: title);
    setState(() {
      tasks.add(task);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
              "${' ${tasks.length}'} tasks loaded, scroll to load more tasks."),
        ),
        floatingActionButton: FloatingActionButton(
          child: Text('Add'),
          onPressed: () => {
            showDialog(
                context: context,
                builder: (context) {
                  return Dialog(
                    elevation: 16,
                    child: Card(
                      child: TextField(
                        onSubmitted: ((value) {
                          onAddNewTask(value);
                          Navigator.pop(context);
                        }),
                        decoration: const InputDecoration(
                            labelText: "Enter a new Task"),
                      ),
                    ),
                  );
                })
          },
        ),
        body: SmartRefresher(
          enablePullDown: true,
          enablePullUp: true,
          header: const WaterDropHeader(),
          controller: refreshController,
          onRefresh: onRefresh,
          onLoading: onLoading,
          child: MasonryGridView.count(
            crossAxisCount: 2,
            mainAxisSpacing: 2,
            itemCount: tasks.length,
            itemBuilder: (context, index) {
              return TaskCard(
                task: tasks[index],
                height: (index % 5 + 1) * 50,
              );
            },
          ),
        ));
  }
}