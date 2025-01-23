const cardData = [
  {
    question: "What is the primary purpose of React?",
    answer:
      "To build user interfaces, especially for single-page applications, using a component-based approach",
  },
  {
    question: "What is the purpose of the useState hook in React?",
    answer:
      "The useState hook allows you to add state to functional components and manage it during the component's lifecycle",
  },
  {
    question:
      "How do you pass data from a parent component to a child component in React?",
    answer:
      "By using props, which are passed to the child component as attributes in the JSX syntax",
  },
  {
    question: "What is the difference between state and props in React?",
    answer:
      "State is used to manage data within a component and can be changed, while props are used to pass data to components and are read-only.",
  },
  {
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight in-memory representation of the actual DOM. React uses it to efficiently update and render changes by comparing the virtual DOM with the real DOM.",
  },
  {
    question: "What is a functional component in React?",
    answer:
      "A functional component is a simple JavaScript function that returns React elements. It can use hooks like useState and useEffect for state and lifecycle management.",
  },
  {
    question: "What is a class component in React?",
    answer:
      "A class component is a JavaScript class that extends React.Component and includes a render method to return React elements. It can manage state and lifecycle methods.",
  },
  {
    question: "What is the significance of keys in React lists?",
    answer:
      "Keys help React identify which items in a list have changed, are added, or are removed. They optimize performance during rendering by avoiding unnecessary re-renders.",
  },
  {
    question: "What is React Router used for?",
    answer:
      "React Router is a library used for handling navigation and routing in React applications. It allows you to create single-page applications with multiple views.",
  },
  {
    question: "What is the Context API in React?",
    answer:
      "The Context API is used to share data between components without passing props through every level of the component tree.",
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    answer:
      "A higher-order component is a function that takes a component as an argument and returns a new component. It is used to add functionality to existing components.",
  },
  {
    question: "What is the difference between controlled and uncontrolled components in React?",
    answer:
      "Controlled components have their form data managed by React state, while uncontrolled components manage their own state using the DOM.",
  },
  {
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that prevents a functional component from re-rendering if its props haven't changed, improving performance.",
  },
  {
    question: "What is the difference between React and ReactDOM?",
    answer:
      "React is a library for building user interfaces, while ReactDOM is a library used to render React components to the DOM.",
  },
  {
    question: "What is the role of a ref in React?",
    answer:
      "A ref is used to access and manipulate DOM elements directly or to interact with child components imperatively.",
  },
];

export default cardData;
