import './App.css'
import useInput from './components/useInput';
import styles from './button.module.css'
import styled from 'styled-components';
// -----style components-----
// const Button = styled.button`
//   background-color: blue;
//   color: white;
//   font-size: 16px;
//   border: none;
//   padding: 10px 20px;
// `;
// const Buttonn = styled.button`
// background-color: red;
// color: white;
// font-size: 16px;
// border: none;
// padding: 10px 20px;
// `;

// function App() {
//     return (
//         <div>
//             <Button>ClickBlue</Button>
//             <Buttonn>ClickRed</Buttonn>
//         </div>
//     )
// }



{/* --css module-- */ }
// function App() {
//   return (
//     <div>
//       <button className={styles.button}>
//         Hello World
//       </button>
//       <button className={styles.button}>
//         Bye Bye
//       </button>
//     </div>
//   );
// }



// --custom hook là tách các hook riêng biệt để tái sử dụng và tránh lặp lại code
// const App = () => {
//   const [username, setUsername, resetUsername] = useInput('');
//   const [password, setPassword, resetPassword] = useInput('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username}`);
//     console.log(`Password: ${password}`);
//     resetUsername();
//     resetPassword();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={setUsername} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={setPassword} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };



// import React from 'react';
// const MyComponent = React.memo((props) => {
//   return (
//     <div>
//       {/* ... */}
//     </div>
//   );
// });


// --react.memo lưu trữ các kết quả render
// import React from 'react';

// const App = React.memo((props) => {
//   return (
//     <form onSubmit={props.onSubmit}>
//       <label>
//         Email:
//         <input type="email" value={props.email} onChange={props.onEmailChange} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={props.password} onChange={props.onPasswordChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// });




// useMemo tránh render lại nhiều lần nếu không thấy sự thay đổi thì sẽ không re-render
// import React, { useState, useMemo } from 'react';

// const App = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = useMemo(() => {
//     return `${firstName} ${lastName}`;
//   }, [firstName, lastName]);

//   return (
//     <div>
//       <h1>Hello, {fullName}!</h1>
//       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//     </div>
//   );
// };



// useCallback 
// import React, { useState, useCallback } from 'react';
// import ChildComponent from './components/ChildComponent';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent handleClick={handleClick} />
//     </div>
//   );
// };




// --ref để tham chiếu đến DOM hoặc instance của một component

// import "./App.css";
// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }

//   focusInput = () => this.textInput.current.focus();

//   render() {
//     return (
//       <div className="App">
//         <input type="text" ref={this.textInput} />
//         <button onClick={this.focusInput}>Focus input di nao</button>
//       </div>
//     );
//   }
// }



// -- useRef là hook để tạo ra ref lưu trữ nó giữa các lần render
// const App = ()=>  {

//   const textInput = React.useRef()

//   const focusInput = () => textInput.current.focus();

//   return (
//     <div className="App">
//       <input type="text" ref={textInput} />
//       <button onClick={focusInput}>Focus input di nao</button>
//     </div>
//   );
// }



// forwarRef là API để chuyển tiếp các ref ví dụ ref từ component cha đến component con



// có thể dùng useEffect để tải dữ liệu từ một API sau đó hiển thị dữ liệu ra trang.
// Trong khi đó có thể dùng useLayoutEffect để kiểm soát việc render các phần tử trên trang
// và tạo hiệu ứng paint cho nó

// useLayoutEfect giống useEffect nhưng thực hiện ngay khi DOM udpate, gọi lập tức trước
// khi component con đượcc render


// --useReducer là phiên bản nâng cấp của useState để dùng trong các trường hợp phức tạp
// nếu đơn giản thì ta vẫn nên dùng useState vì code dễ hiểu và ngắn hơn 

// import { useReducer } from 'react';
// const initState = 0
// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down';
// const reducer = (state, aciton) => {
//   switch (aciton) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, initState)
//   return (
//     <div style={{ padding: '0 20px' }}>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(DOWN_ACTION)}>
//         DOWN
//       </button>
//       <button onClick={() => dispatch(UP_ACTION)}>
//         UP
//       </button>
//     </div>
//   )
// }



//useContent chuyển các props xuống các components con mà không cần thông qua quá nhiều cấp
// componenets 

// import Content from './Content';
// import { createContext, useState } from 'react';

// export const ThemeContext = createContext()
// function App() {

//   const [theme, setTheme] = useState('dark')

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }
//   return (
//     < ThemeContext.Provider value={theme}>
//       <div style={{ padding: 20 }}>
//         <button onClick={toggleTheme}>Toggle theme</button>
//         <Content />
//       </div>
//     </ThemeContext.Provider>

//   )
// }
export default App


// render props là kỹ thuật lập trình để chia sẻ các logic thông qua props là một hàm từ 
//  từ components cha đến component con 

// import React from 'react';
// import ChildComponent from './ChildComponent';

// class ParentComponent extends React.Component {
//   renderContent() {
//     return (
//       <div>
//         <p >test</p>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <ChildComponent renderContent={this.renderContent} />
//       </div>
//     );
//   }
// }

// export default ParentComponent;


// --Error Boundary : bắt lỗi của tất cả các components con và in ra các lỗi đó 
// hiện thị ra thay vì dừng toàn bộ ứng dụng



// export default App


// --HOC cho phép tái sử dụng các logic và chức năng trong các components 
// khác nhau mà không phải sao chép hay dán lại mã