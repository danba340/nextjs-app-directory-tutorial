const todos = [
  {
    id: '1',
    title: 'Get Milk',
    description: 'Go to the store and get some milk',
  },
  {
    id: '2',
    title: 'Call Lee Robinson',
    description: 'Give Lee a call for good measure',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const todo = todos.find((t) => t.id === id);
  if (!todo) throw new Error('There is no todo with id: ' + id);
  return new Response(JSON.stringify(todo));
}
