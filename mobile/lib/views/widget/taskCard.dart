import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:mobile/model/task.dart';
import 'package:timeago/timeago.dart' as TimeAgo;

class TaskCard extends StatefulWidget {
  Task task;
  double height;
  TaskCard({
    Key? key,
    required this.task,
    this.height  = 200
  }) : super(key: key);

  @override
  State<TaskCard> createState() => _TaskCardState();
}

class _TaskCardState extends State<TaskCard> {
  @override
  Widget build(BuildContext context) {
    return Padding(padding: EdgeInsets.only(top: 10, bottom: 10), child: ConstrainedBox(

      constraints: BoxConstraints(minHeight: widget.height, ),

      child: Stack(

        children: [
          Column(

            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [Text(widget.task.title, textAlign: TextAlign.center, style: TextStyle(decoration: widget.task.isCompleted? TextDecoration.lineThrough : TextDecoration.none),)
              ,Text(TimeAgo.format(DateTime.parse(widget.task.createdAt))),
              TextButton(onPressed: (()=>changeStatus()), child: Text(widget.task.isCompleted? 'Uncompleted' : "Completed"))
            ]
          ),
        ],
      ),
    ));
  }

  changeStatus() async {
    Task newTask =  await widget.task.updateCompleted();
    setState(() {
      widget.task = newTask;
    });
  }
}
