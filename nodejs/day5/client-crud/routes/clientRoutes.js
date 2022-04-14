import Client from "../models/Client.js";

const create = async (req, res) => {
  const user = await Client.create(req.body);
  res.send(user);
}
const update = async (req, res) => {
  const id = req.params.id;
  await Client.findByIdAndUpdate(id, req.body);
  const user = await Client.findById(id);
  res.send(user);
}
const read = async (req, res) => {
  if (req.params.id) {
    const user = await Client.findById(req.params.id);
    res.send(user);
  } else {
    const users = await Client.find({});
    res.send(users);
  }
}
const deleteOne = async (req, res) => {
  await Client.findByIdAndRemove(req.params.id);
  res.sendStatus(200);
}
const clientRoutes = (app) => {
  app.get('/:id?', read);
  app.post("/", create);
  app.put('/:id', update);
  app.delete('/:id', deleteOne);
}
export default clientRoutes;
