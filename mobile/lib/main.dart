import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mobile/model/task.dart';
import 'package:mobile/views/page/homeLayout.dart';
import 'package:mobile/views/widget/taskCard.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Manger tasks',
      home: HomeLayout(),
    );
  }
}
