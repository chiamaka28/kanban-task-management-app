export const Boards = [
  {
    id: "1",
    icon: '/assets/boardIcon.svg',
    title: "Platform Launch",
    active: true,
    columns: [
      { id: "col1", title: "To Do", tasks: [{ id: "1", text: "Design UI" }] },
      { id: "col2", title: "Doing", tasks: [] },
      { id: "col3", title: "Done", tasks: [] },
    ],
  },
   {
    id: "2",
    icon: '/assets/boardIcon.svg',
    title: "Marketing Plan",
     active: false,
    columns: [
      { id: "col1", title: "To Do", tasks: [{ id: "1", text: "Design UI" }] },
      { id: "col2", title: "Doing", tasks: [] },
      { id: "col3", title: "Done", tasks: [] },
    ],
  },
  ,
   {
    id: "3",
    icon: '/assets/boardIcon.svg',
    title: "Roadmap",
     active: false,
    columns: [
      { id: "col1", title: "To Do", tasks: [{ id: "1", text: "Design UI" }] },
      { id: "col2", title: "Doing", tasks: [] },
      { id: "col3", title: "Done", tasks: [] },
    ],
  },
];