import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:convert/convert.dart';

class Task {
  String id;
  String title;
  bool isCompleted;
  String createdAt;
  static const String backendApi = 'http://192.168.1.169:3001/tasks/';

  Task(
      {required this.id,
      required this.createdAt,
      required this.isCompleted,
      required this.title});

  static Future<Task> createTask({
    required String title,
    String? createdAt,
    bool isCompleted = false,
  }) async {
    final response =
        await http.post(Uri.parse(backendApi), body: {"title": title});
    final responseBodyToJson = json.decode(response.body);
    return Task(
        id: responseBodyToJson["id"],
        createdAt: responseBodyToJson["createdAt"],
        isCompleted: responseBodyToJson["isCompleted"],
        title: responseBodyToJson["title"]);
  }

  Future<Task> updateTitle({required String title}) async {
    await Future.delayed(const Duration(seconds: 5));
    this.title = title;
    return this;
  }

  Future<Task> updateCompleted() async {
    final response = await http.patch(Uri.parse('$backendApi$id'),
        body: {"isCompleted": (!isCompleted).toString()});
    if (response.statusCode == 200) {
      isCompleted = !isCompleted;
    }
    return this;
  }

  factory Task.fromJson(Map<String, dynamic> json) {
    return Task(
        id: json['id'],
        title: json['title'],
        createdAt: json['createdAt'],
        isCompleted: json['isCompleted']);
  }

  static Future<List<Task>> getTasks({int limit = 25, int skip = 0}) async {
    String getTasksUri = "$backendApi?limit=$limit&skip=$skip";
    final response = await http.get(Uri.parse(getTasksUri));
    final responseBodyToJson = json.decode(response.body);
    List<Task> tasks = <Task>[];
    for (var task in responseBodyToJson) {
      tasks.add(Task(
          id: task['id'],
          createdAt: task['createdAt'],
          isCompleted: task['isCompleted'],
          title: task['title']));
    }
    return tasks;
  }
}
