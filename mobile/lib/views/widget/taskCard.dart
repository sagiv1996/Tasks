import 'package:flutter/material.dart';
import 'package:mobile/model/task.dart';

class TaskCard extends StatelessWidget {
  Task task;
  double height;
  TaskCard({
    Key? key,
    required this.task,
    this.height  = 200
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(padding: EdgeInsets.only(top: 10, bottom: 10), child: ConstrainedBox(

      constraints: BoxConstraints(minHeight: height, ),

      child: Stack(

        children: [
          Column(

            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [Text(task.title, textAlign: TextAlign.center,), Text(task.createdAt, textAlign: TextAlign.center)],
          ),
        ],
      ),
    ));
      // Column(
      // mainAxisSize: MainAxisSize.max,
      //
      // mainAxisAlignment: MainAxisAlignment.center,
      // children: [
      //   Text(task.title), Text(task.createdAt)]);
  }
}
