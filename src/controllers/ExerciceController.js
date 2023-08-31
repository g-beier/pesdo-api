class ExercicesController {
  index(request, response) {
    response.send("List all exercices");
  }

  show(request, response) {
    const { id } = request.params;

    response.send(id);
  }

  store(request, response) {
    const { username, password } = request.body;

    response.send(username);
  }

  update(request, response) {
    const { id } = request.params;
    const { username, password } = request.body;

    response.send(`${username}: ${id}`);
  }

  delete(request, response) {
    const { id } = request.params;

    response.send(`Deleted ${id}`);
  }
}

module.exports = new ExercicesController();
