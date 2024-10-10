"use strict";(self.webpackChunkdatepicker=self.webpackChunkdatepicker||[]).push([[5],{"./src/components/calendar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const HeaderContainer=styled_components_browser_esm.I4.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,MonthYearText=styled_components_browser_esm.I4.div`
  text-align: center;
  font-weight: 700;

  display: flex;
  gap: 0.4rem;
`,ArrowButton=styled_components_browser_esm.I4.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,TextButton=styled_components_browser_esm.I4.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${({theme})=>theme.colors.primary};
  font-weight: 700;

  transition: color 0.2s ease;

  &:hover {
    color: ${({theme})=>theme.colors.active};
  }
`,CalendarHeader=({month,year,view,onPrevClick,onNextClick,onMonthClick,onYearClick})=>{let title="";if("days"===view)title=`${month} ${year}`;else if("months"===view)title=`${year}`;else if("years"===view){const startYear=12*Math.floor(year/12);title=`${startYear} - ${startYear+11}`}return(0,jsx_runtime.jsxs)(HeaderContainer,{children:[(0,jsx_runtime.jsx)(ArrowButton,{onClick:onPrevClick,children:"<<"}),(0,jsx_runtime.jsx)(MonthYearText,{children:"days"===view?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextButton,{onClick:onMonthClick,children:month}),(0,jsx_runtime.jsx)(TextButton,{onClick:onYearClick,children:year})]}):(0,jsx_runtime.jsx)(TextButton,{onClick:onYearClick,children:title})}),(0,jsx_runtime.jsx)(ArrowButton,{onClick:onNextClick,children:">>"})]})};CalendarHeader.__docgenInfo={description:"",methods:[],displayName:"CalendarHeader"};var dateHelpers=__webpack_require__("./src/utils/dateHelpers.ts");const defaultHolidays=[{date:new Date(2024,0,1),isRecurring:!0},{date:new Date(2024,0,2),isRecurring:!0},{date:new Date(2024,0,7),isRecurring:!1},{date:new Date(2024,2,8),isRecurring:!0},{date:new Date(2024,4,1),isRecurring:!0},{date:new Date(2024,4,9),isRecurring:!0},{date:new Date(2024,4,14),isRecurring:!1},{date:new Date(2024,6,3),isRecurring:!0},{date:new Date(2024,10,7),isRecurring:!1},{date:new Date(2024,11,25),isRecurring:!0}],CalendarBodyContainer=styled_components_browser_esm.Ay.div``,WeekDaysHeader=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 32px;
`,WeekDayCell=styled_components_browser_esm.Ay.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`,DatesGrid=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 32px;
`,DayCell=styled_components_browser_esm.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({theme,$isCurrentMonth,$isWeekend,$isHoliday,$isSelected,$isDisabled})=>{switch(!0){case $isDisabled:return theme.colors.disabledText;case $isSelected:return theme.colors.activeText;case $isCurrentMonth&&$isWeekend:case $isCurrentMonth&&$isHoliday:return theme.colors.red;case!$isCurrentMonth:return theme.colors.disabledText;default:return theme.colors.secondary}}};

  background-color: ${({theme,$isToday,$isSelected})=>{switch(!0){case $isSelected:return theme.colors.active;case $isToday:return theme.colors.hoverBackground;default:return"transparent"}}};
  border: none;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme,$isSelected})=>!$isSelected&&theme.colors.hoverBackground};
  }

  &:disabled {
    cursor: auto;
    background-color: transparent;
  }
`,CalendarDaysView=({month,year,selectedDate,onDateSelect,minDate,maxDate,startWeekOnSunday=!0,highlightWeekends=!1,highlightHolidays=!1,holidays=defaultHolidays})=>{const weekDays=(0,react.useMemo)((()=>(0,dateHelpers.wJ)(startWeekOnSunday)),[startWeekOnSunday]),days=(0,react.useMemo)((()=>(0,dateHelpers.YQ)(year,month,startWeekOnSunday)),[year,month,startWeekOnSunday]),enhancedDays=(0,react.useMemo)((()=>(0,dateHelpers.I3)(days,startWeekOnSunday,minDate,maxDate,holidays)),[days,startWeekOnSunday,minDate,maxDate,holidays]);return(0,jsx_runtime.jsxs)(CalendarBodyContainer,{children:[(0,jsx_runtime.jsx)(WeekDaysHeader,{children:weekDays.map((day=>(0,jsx_runtime.jsx)(WeekDayCell,{children:day},day)))}),(0,jsx_runtime.jsx)(DatesGrid,{children:enhancedDays.map((({day,month:currentMonth,year:currentYear,isCurrentMonth,isToday,isDisabled,isHoliday,isWeekend})=>(0,jsx_runtime.jsx)(DayCell,{type:"button",role:"gridcell",disabled:isDisabled,onClick:()=>((day,month,year)=>{const newSelectedDate=new Date(year,month,day);onDateSelect&&onDateSelect(newSelectedDate)})(day,currentMonth,currentYear),$isCurrentMonth:isCurrentMonth,$isToday:isToday,$isWeekend:highlightWeekends&&isWeekend,$isHoliday:highlightHolidays&&isHoliday,$isSelected:selectedDate&&(0,dateHelpers.ny)(selectedDate,new Date(currentYear,currentMonth,day)),$isDisabled:isDisabled,children:day},`${currentYear}-${currentMonth}-${day}`)))})]})};CalendarDaysView.__docgenInfo={description:"",methods:[],displayName:"CalendarDaysView",props:{startWeekOnSunday:{defaultValue:{value:"true",computed:!1},required:!1},highlightWeekends:{defaultValue:{value:"false",computed:!1},required:!1},highlightHolidays:{defaultValue:{value:"false",computed:!1},required:!1},holidays:{defaultValue:{value:"[\n  { date: new Date(2024, 0, 1), isRecurring: true },\n  { date: new Date(2024, 0, 2), isRecurring: true },\n  { date: new Date(2024, 0, 7), isRecurring: false },\n  { date: new Date(2024, 2, 8), isRecurring: true },\n  { date: new Date(2024, 4, 1), isRecurring: true },\n  { date: new Date(2024, 4, 9), isRecurring: true },\n  { date: new Date(2024, 4, 14), isRecurring: false },\n  { date: new Date(2024, 6, 3), isRecurring: true },\n  { date: new Date(2024, 10, 7), isRecurring: false },\n  { date: new Date(2024, 11, 25), isRecurring: true },\n]",computed:!1},required:!1}}};const shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CalendarCell=styled_components_browser_esm.I4.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  color: ${({theme,$isSelected,$isDisabled})=>{switch(!0){case $isDisabled:return theme.colors.disabledText;case $isSelected:return theme.colors.activeText;default:return theme.colors.secondary}}};

  background-color: ${({theme,$isSelected})=>!0===$isSelected?theme.colors.active:"transparent"};

  &:hover {
    background-color: ${({theme,$isSelected})=>!$isSelected&&theme.colors.hoverBackground};
  }

  &:disabled {
    cursor: auto;
    background-color: transparent;
  }
`,calendar_months_view_CalendarBodyContainer=styled_components_browser_esm.I4.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 32px;

  row-gap: 1rem;
  column-gap: 0.5rem;
`,CalendarMonthsView=({currentMonth,onMonthSelect})=>(0,jsx_runtime.jsx)(calendar_months_view_CalendarBodyContainer,{children:shortMonths.map(((month,index)=>(0,jsx_runtime.jsx)(CalendarCell,{onClick:()=>onMonthSelect(index),$isSelected:currentMonth===index,children:month},month)))});CalendarMonthsView.__docgenInfo={description:"",methods:[],displayName:"CalendarMonthsView"};const calendar_years_view_styled_CalendarBodyContainer=styled_components_browser_esm.I4.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 32px;

  row-gap: 1rem;
  column-gap: 0.5rem;
`,CalendarYearsView=({currentYear,onYearSelect})=>{const startYear=12*Math.floor(currentYear/12),years=Array.from({length:12},((_,i)=>startYear+i));return(0,jsx_runtime.jsx)(calendar_years_view_styled_CalendarBodyContainer,{children:years.map((year=>(0,jsx_runtime.jsx)(CalendarCell,{onClick:()=>onYearSelect(year),$isSelected:year===currentYear,children:year},year)))})};CalendarYearsView.__docgenInfo={description:"",methods:[],displayName:"CalendarYearsView"};var global=__webpack_require__("./src/styles/global.ts"),theme=__webpack_require__("./src/styles/theme.ts");const CalendarContainer=styled_components_browser_esm.Ay.div`
  padding: 10px;
  width: 250px;
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: 8px;
`,Calendar=({currentMonth,currentYear,onMonthChange,onDateSelect,holidays,selectedDate,minDate,maxDate,highlightHolidays=!1,highlightWeekends=!1,startWeekOnSunday=!0})=>{const[view,setView]=(0,react.useState)("days");return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:theme.w,children:[(0,jsx_runtime.jsx)(global.A,{}),(0,jsx_runtime.jsxs)(CalendarContainer,{children:[(0,jsx_runtime.jsx)(CalendarHeader,{month:(0,dateHelpers.Ge)(currentMonth),year:currentYear,view,onPrevClick:()=>{if("days"===view){const newMonth=0===currentMonth?11:currentMonth-1,newYear=0===currentMonth?currentYear-1:currentYear;onMonthChange?.(newMonth,newYear)}else"months"===view?onMonthChange?.(currentMonth,currentYear-1):"years"===view&&onMonthChange?.(currentMonth,currentYear-12)},onNextClick:()=>{if("days"===view){const newMonth=11===currentMonth?0:currentMonth+1,newYear=11===currentMonth?currentYear+1:currentYear;onMonthChange?.(newMonth,newYear)}else"months"===view?onMonthChange?.(currentMonth,currentYear+1):"years"===view&&onMonthChange?.(currentMonth,currentYear+12)},onMonthClick:()=>{setView("months")},onYearClick:()=>{setView("years")}}),"days"===view&&(0,jsx_runtime.jsx)(CalendarDaysView,{month:currentMonth,year:currentYear,minDate,maxDate,startWeekOnSunday,highlightWeekends,highlightHolidays,holidays,selectedDate,onDateSelect:date=>{onDateSelect?.(date)}}),"months"===view&&(0,jsx_runtime.jsx)(CalendarMonthsView,{currentMonth,onMonthSelect:month=>{setView("days"),onMonthChange?.(month,currentYear)}}),"years"===view&&(0,jsx_runtime.jsx)(CalendarYearsView,{currentYear,onYearSelect:year=>{setView("months"),onMonthChange?.(currentMonth,year)}})]})]})};Calendar.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{highlightHolidays:{defaultValue:{value:"false",computed:!1},required:!1},highlightWeekends:{defaultValue:{value:"false",computed:!1},required:!1},startWeekOnSunday:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./src/styles/global.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").DU`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
    }
`},"./src/styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});const theme={colors:{primary:"#000000",secondary:"#333333",disabledText:"#aaaaaa",activeText:"#ffffff",active:"#2f80ed",border:"#e1e1e1",hoverBackground:"#2f80ed1a",red:"#ff1818"}}},"./src/utils/dateHelpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ge:()=>getMonthName,I3:()=>enhanceCalendarDays,YQ:()=>getCalendarDays,ny:()=>isSameDate,wJ:()=>getWeekDaysNames,xR:()=>isDateWithinRange});const createDaysArray=(year,month,length,isCurrentMonth)=>Array.from({length},((_,i)=>({day:i+1,month,year,isCurrentMonth}))),getCalendarDays=(year,month,startWeekOnSunday=!0)=>{const daysInMonth=((year,month)=>new Date(year,month+1,0).getDate())(year,month),firstDayOfWeek=((year,month,startWeekOnSunday=!0)=>{const firstDay=new Date(year,month,1).getDay();return startWeekOnSunday?firstDay:0===firstDay?6:firstDay-1})(year,month,startWeekOnSunday),prevMonthDaysArray=((year,month,firstDayOfWeek)=>{const prevMonth=0===month?11:month-1,prevMonthYear=0===month?year-1:year;return Array.from({length:firstDayOfWeek},((_,i)=>({day:new Date(year,month,-i).getDate(),month:prevMonth,year:prevMonthYear,isCurrentMonth:!1}))).reverse()})(year,month,firstDayOfWeek),currentMonthDaysArray=createDaysArray(year,month,daysInMonth,!0),lastDayOfWeek=(firstDayOfWeek+daysInMonth)%7,nextMonthDaysArray=((year,month,remainingDays)=>createDaysArray(11===month?year+1:year,11===month?0:month+1,remainingDays,!1))(year,month,0===lastDayOfWeek?0:7-lastDayOfWeek);return[...prevMonthDaysArray,...currentMonthDaysArray,...nextMonthDaysArray]},getMonthName=month=>new Date(0,month).toLocaleString("en-US",{month:"long"}),getWeekDaysNames=(startWeekOnSunday=!0)=>startWeekOnSunday?["Su","Mo","Tu","We","Th","Fr","Sa"]:["Mo","Tu","We","Th","Fr","Sa","Su"],isSameDate=(date1,date2)=>date1.getDate()===date2.getDate()&&date1.getMonth()===date2.getMonth()&&date1.getFullYear()===date2.getFullYear(),isDateWithinRange=(date,minDate,maxDate)=>!(minDate&&date<minDate)&&!(maxDate&&date>maxDate),enhanceCalendarDays=(days,startWeekOnSunday=!0,minDate,maxDate,holidays)=>days.map(((day,index)=>{const currentDate=new Date(day.year,day.month,day.day),isDisabled=!isDateWithinRange(currentDate,minDate,maxDate),isDayHoliday=((date,holidays=[])=>holidays.some((({date:holidayDate,isRecurring})=>isRecurring?holidayDate.getDate()===date.getDate()&&holidayDate.getMonth()===date.getMonth():holidayDate.getDate()===date.getDate()&&holidayDate.getMonth()===date.getMonth()&&holidayDate.getFullYear()===date.getFullYear())))(currentDate,holidays),isDayWeekend=((dayIndex,startWeekOnSunday)=>startWeekOnSunday?0===dayIndex||6===dayIndex:5===dayIndex||6===dayIndex)(index%7,startWeekOnSunday),isDayToday=((year,month,day)=>{const today=new Date;return today.getFullYear()===year&&today.getMonth()===month&&today.getDate()===day})(day.year,day.month,day.day);return{...day,isDisabled,isHoliday:isDayHoliday,isWeekend:isDayWeekend,isToday:isDayToday}}))}}]);
//# sourceMappingURL=5.c585c3ef.iframe.bundle.js.map