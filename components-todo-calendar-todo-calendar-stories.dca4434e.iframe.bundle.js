"use strict";(self.webpackChunkdatepicker=self.webpackChunkdatepicker||[]).push([[735],{"./src/components/todo-calendar/todo-calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>todo_calendar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),calendar=__webpack_require__("./src/components/calendar/index.tsx"),theme_wrapper=__webpack_require__("./src/shared/components/theme-wrapper/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const CalendarButtonStyled=styled_components_browser_esm.I4.button`
  width: 250px;
  padding: 0.6rem;
  background-color: ${({theme})=>theme.colors.background};
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: 0 0 0.5rem 0.5rem;
`,CalendarButton=({children,onClick})=>(0,jsx_runtime.jsx)(theme_wrapper.L,{children:(0,jsx_runtime.jsx)(CalendarButtonStyled,{type:"button",onClick,children})});CalendarButton.__docgenInfo={description:"",methods:[],displayName:"CalendarButton"};var useClickOutside=__webpack_require__("./src/shared/hooks/useClickOutside.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const StyledModalContainer=styled_components_browser_esm.I4.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`,ModalContainer=({children})=>{const[modalContainer]=(0,react.useState)((()=>document.createElement("div")));return(0,react.useEffect)((()=>(document.body.appendChild(modalContainer),()=>{document.body.removeChild(modalContainer)})),[modalContainer]),(0,react_dom.createPortal)((0,jsx_runtime.jsx)(StyledModalContainer,{children}),modalContainer)},ConfirmModalContainer=styled_components_browser_esm.I4.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`,ConfirmModalContent=styled_components_browser_esm.I4.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({theme})=>theme.colors.background};

  padding: 2rem 1rem;
  border-radius: 0.5rem;
`,ConfrirmTitle=styled_components_browser_esm.I4.h2`
  font-size: 1rem;
  text-align: center;
  color: ${({theme})=>theme.colors.secondary};
`,ButtonsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,ConfirmButton=styled_components_browser_esm.I4.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme})=>theme.colors.hoverBackground};
  color: ${({theme})=>theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme})=>theme.colors.activeBright};
  }
`,CancelButton=styled_components_browser_esm.I4.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme})=>theme.colors.muted};
  color: ${({theme})=>theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme})=>theme.colors.activeBright};
  }
`,ConfirmModal=({title,onCancel,onConfirm})=>{const confirmRef=(0,react.useRef)(null);return(0,useClickOutside.L)(confirmRef,onCancel),(0,jsx_runtime.jsx)(ConfirmModalContainer,{children:(0,jsx_runtime.jsxs)(ConfirmModalContent,{ref:confirmRef,children:[(0,jsx_runtime.jsx)(ConfrirmTitle,{children:title}),(0,jsx_runtime.jsxs)(ButtonsContainer,{children:[(0,jsx_runtime.jsx)(ConfirmButton,{type:"button",onClick:onConfirm,children:"Yes"}),(0,jsx_runtime.jsx)(CancelButton,{type:"button",onClick:onCancel,children:"Cancel"})]})]})})};ConfirmModal.__docgenInfo={description:"",methods:[],displayName:"ConfirmModal"};const TodoItemStyled=styled_components_browser_esm.I4.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({theme})=>theme.colors.border};
  background-color: ${({theme})=>theme.colors.background};
`,TodoText=styled_components_browser_esm.I4.p``,RemoveButton=styled_components_browser_esm.I4.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({theme})=>theme.colors.red};
  }
`,TodoItem=({id,text,onTodoRemove})=>{const[isDelete,setIsDelete]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(TodoItemStyled,{children:[(0,jsx_runtime.jsx)(TodoText,{children:text}),(0,jsx_runtime.jsx)(RemoveButton,{onClick:()=>{setIsDelete(!0)},children:"Remove"}),isDelete&&(0,jsx_runtime.jsx)(ConfirmModal,{title:"Do you want to delete this task?",onConfirm:()=>{onTodoRemove(id)},onCancel:()=>{setIsDelete(!1)}})]})};TodoItem.__docgenInfo={description:"",methods:[],displayName:"TodoItem"};const TodoListStyled=styled_components_browser_esm.I4.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  height: 10rem;
  overflow: auto;

  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme})=>theme.colors.border};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme})=>theme.colors.disabledText};
  }
`,TodoList=({todos,onTodoRemove})=>(0,jsx_runtime.jsx)(TodoListStyled,{children:todos.map((todo=>(0,jsx_runtime.jsx)(TodoItem,{id:todo.id,text:todo.text,onTodoRemove},todo.id)))});TodoList.__docgenInfo={description:"",methods:[],displayName:"TodoList"};const TodoModalContent=styled_components_browser_esm.Ay.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${({theme})=>theme.colors.background};

  padding: 2rem 1rem;
  border-radius: 0.5rem;
`,ModalTitle=styled_components_browser_esm.Ay.h2`
  text-align: center;
  color: ${({theme})=>theme.colors.secondary};
`,TodoInputContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  display: flex;
  gap: 0.2rem;
`,TodoInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: 0.5rem;
`,AddButton=styled_components_browser_esm.Ay.button`
  border: none;
  width: 6rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  color: ${({theme})=>theme.colors.primary};
  background-color: ${({theme})=>theme.colors.active};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme})=>theme.colors.hoverButton};
  }

  &:disabled {
    background-color: ${({theme})=>theme.colors.muted};
    cursor: auto;
  }
`,CloseButtonContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`,CloseButton=styled_components_browser_esm.Ay.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme})=>theme.colors.hoverBackground};
  color: ${({theme})=>theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme})=>theme.colors.activeBright};
  }
`,EmptyTodosList=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;

  font-size: 1rem;
  font-weight: 500;
`,TodoModal=({isOpen,date,todos,onClose,onTodoAdd,onTodoRemove})=>{const[inputValue,setInputValue]=(0,react.useState)(""),ref=(0,react.useRef)(null);(0,useClickOutside.L)(ref,onClose);return isOpen?(0,jsx_runtime.jsx)(theme_wrapper.L,{children:(0,jsx_runtime.jsx)(ModalContainer,{children:(0,jsx_runtime.jsxs)(TodoModalContent,{ref,children:[(0,jsx_runtime.jsxs)(ModalTitle,{children:["Tasks for ",date?.toLocaleDateString()]}),(0,jsx_runtime.jsxs)(TodoInputContainer,{children:[(0,jsx_runtime.jsx)(TodoInput,{type:"text",maxLength:50,placeholder:"Add a new task",value:inputValue,onChange:e=>{e.target.value.length<=50&&setInputValue(e.target.value)}}),(0,jsx_runtime.jsx)(AddButton,{onClick:()=>((text,date)=>{text.length<=50&&(onTodoAdd(text,date),setInputValue(""))})(inputValue,date),disabled:!inputValue,children:"Add task"})]}),0===todos.length?(0,jsx_runtime.jsx)(EmptyTodosList,{children:"Your task list is empty"}):(0,jsx_runtime.jsx)(TodoList,{todos,onTodoRemove}),(0,jsx_runtime.jsx)(CloseButtonContainer,{children:(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:"Close"})})]})})}):null};TodoModal.__docgenInfo={description:"",methods:[],displayName:"TodoModal"};const saveTodosToStorage=todos=>{const todosToStore=todos.map((todo=>({...todo,date:todo.date.toISOString()})));localStorage.setItem("todos",JSON.stringify(todosToStore))},useTodos=()=>{const[todos,setTodos]=(0,react.useState)((()=>{const storedTodos=localStorage.getItem("todos");if(storedTodos)return JSON.parse(storedTodos).map((todo=>({...todo,date:new Date(todo.date)})));return[]})());return{todos,addTodo:(text,date)=>{const newTodo={id:String((new Date).getTime()),text,date};setTodos((prev=>{const updatedTodos=[...prev,newTodo];return saveTodosToStorage(updatedTodos),updatedTodos}))},removeTodo:taskId=>{setTodos((prev=>{const updatedTodos=prev.filter((todo=>todo.id!==taskId));return saveTodosToStorage(updatedTodos),updatedTodos}))}}};const TodoCalendar=({...props})=>{const[date,setDate]=(0,react.useState)(),CalendarWithTodoLogic=function withTodoLogic(WrappedComponent){return props=>{const{value,onDateSelect,...rest}=props,{todos,addTodo,removeTodo}=useTodos(),[isModalOpen,setIsModalOpen]=(0,react.useState)(!1),todosForSelectedDate=todos.filter((todo=>todo.date.toDateString()===value?.toDateString()));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(WrappedComponent,{...rest,value,todos,withTodo:!0,onDateSelect}),value&&(0,jsx_runtime.jsx)(CalendarButton,{onClick:()=>setIsModalOpen(!0),children:todosForSelectedDate.length>0?"View tasks":"Add tasks"}),(0,jsx_runtime.jsx)(TodoModal,{isOpen:isModalOpen,date:value,todos:todosForSelectedDate,onClose:()=>setIsModalOpen(!1),onTodoAdd:(text,date)=>{date&&addTodo(text,date)},onTodoRemove:removeTodo})]})}}(calendar.V);return(0,jsx_runtime.jsx)(CalendarWithTodoLogic,{value:date,onDateSelect:setDate,...props})};TodoCalendar.__docgenInfo={description:"",methods:[],displayName:"TodoCalendar"};const todo_calendar_stories={title:"Components/TodoCalendar",component:TodoCalendar},Default={args:{startWeekOnSunday:!1,highlightWeekends:!0,highlightHolidays:!1,holidays:void 0,minDate:void 0,maxDate:void 0}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    startWeekOnSunday: false,\n    highlightWeekends: true,\n    highlightHolidays: false,\n    holidays: undefined,\n    minDate: undefined,\n    maxDate: undefined\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/shared/components/theme-wrapper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ThemeWrapper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_shared_styles_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/styles/global.ts"),_shared_styles_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/styles/theme.ts");const ThemeWrapper=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_3__.NP,{theme:_shared_styles_theme__WEBPACK_IMPORTED_MODULE_2__.w,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_styles_global__WEBPACK_IMPORTED_MODULE_1__.A,{}),children]});ThemeWrapper.__docgenInfo={description:"",methods:[],displayName:"ThemeWrapper"}},"./src/shared/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useClickOutside=(ref,handler)=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{ref.current&&!ref.current.contains(event.target)&&handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener)}}),[ref,handler])}}}]);
//# sourceMappingURL=components-todo-calendar-todo-calendar-stories.dca4434e.iframe.bundle.js.map