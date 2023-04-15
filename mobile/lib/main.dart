import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mobile/model/task.dart';
import 'package:mobile/views/widget/taskCard.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Random Layout',
      home: RandomLayout(),
    );
  }
}

class RandomLayout extends StatefulWidget {
  @override
  State<RandomLayout> createState() => _RandomLayoutState();
}

class _RandomLayoutState extends State<RandomLayout> {
  late List<Task> tasks = <Task>[];

  RefreshController _refreshController =
      RefreshController(initialRefresh: true);

  void _onRefresh() async {
    print('Refresh');
    // monitor network fetch
    await Future.delayed(Duration(milliseconds: 1000));
    List<Task> a = await Task.getTasks();
  setState(() {
    tasks = a;
  });
    // if failed,use refreshFailed()
    _refreshController.refreshCompleted();
  }

  void _onLoading() async {
    // monitor network fetch
    await Future.delayed(Duration(milliseconds: 1000));
print("loading");
    // if failed,use loadFailed(),if no data return,use LoadNodata()
    // items.add((items.length+1).toString());
    // if(mounted)
    //   setState(() {
    //
    //   });
    _refreshController.loadComplete();
  }

  Future<void> a() async {
    Future.delayed(Duration(seconds: 10));
    print("Hola pepople :)");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Random Layout'),
        ),
        body: SmartRefresher(
          enablePullDown: true,
          enablePullUp: true,
          header: WaterDropHeader(),
          controller: _refreshController,
          onRefresh: _onRefresh,
          onLoading: _onLoading,
          child: MasonryGridView.count(
            crossAxisCount: 2,
            mainAxisSpacing: 2,
            itemCount: tasks.length ?? 0,
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
