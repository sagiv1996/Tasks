import 'dart:async';
import 'dart:math';

class Task {
  String id;
  String title;
  bool isCompleted;
  String createdAt;

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
    await Future.delayed(const Duration(seconds: 5));
    String id = Random().nextInt(10000).toString();

    return Task(
        id: id,
        createdAt: createdAt ?? DateTime.now().toIso8601String(),
        isCompleted: isCompleted,
        title: title);
  }

  Future<Task> updateTitle({required String title}) async {
    await Future.delayed(const Duration(seconds: 5));
    this.title = title;
    return this;
  }

  Future<Task> updateCompleted() async {
    await Future.delayed(const Duration(seconds: 5));
    isCompleted = !isCompleted;
    return this;
  }

  static Future<List<Task>> getTasks() async {
    List<Task> tasks = [
      Task(id: "7a8e57ce-937c-4df8-a8f7-2dda94d5a852", createdAt: "2022-04-16T13:10:43.446Z", isCompleted: false, title: "Nobis nobis officiis consequatur modi."),
    Task(id: "8ca373f4-3793-4a59-a1cd-d91cb91cde1e",
        title: "Ad perspiciatis exercitationem et porro ullam.",
        isCompleted: false,
        createdAt: "2022-10-11T00:44:39.736Z"),
      Task( id: "c3ea2e10-4bfc-4cf5-957a-3bc699c5ea8d",
          title: "Quidem nemo tempore cum veritatis voluptas voluptate culpa.",
          isCompleted: true,
          createdAt: "2022-12-21T21:18:16.932Z"),
      Task( id: "ab743cfc-6e86-463e-9307-629d53562f23",
          title: "Sit accusantium veritatis fugiat in aliquid explicabo.",
          isCompleted: false,
          createdAt: "2022-11-23T19:25:06.792Z"),
      Task( id: "ab743cfc-6e86-463e-9307-629d53562f23",
          title: "Sit accusantium veritatis fugiat in aliquid explicabo.",
          isCompleted: false,
          createdAt: "2022-11-23T19:25:06.792Z")
    ];
    return tasks;
  }
}
