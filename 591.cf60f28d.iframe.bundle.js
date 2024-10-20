"use strict";(self.webpackChunkdatepicker=self.webpackChunkdatepicker||[]).push([[591],{"./src/components/calendar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),dateHelpers=__webpack_require__("./src/shared/utils/dateHelpers.ts"),formatDatesHelpers=__webpack_require__("./src/shared/utils/formatDatesHelpers.ts"),validation=__webpack_require__("./src/shared/utils/validation.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const HeaderContainer=styled_components_browser_esm.I4.div`
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
  color: ${({theme})=>theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({theme})=>theme.colors.active};
  }

  &:disabled {
    color: ${({theme})=>theme.colors.border};
    cursor: auto;
  }
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
`,CalendarHeader=({month,year,view,minDate,maxDate,onPrevClick,onNextClick,onMonthClick,onYearClick})=>{const title=(0,formatDatesHelpers.zJ)(view,year),isCanGoPrev=(0,validation.uD)(view,year,month,minDate),isCanGoNext=(0,validation.e7)(view,year,month,maxDate);return(0,jsx_runtime.jsxs)(HeaderContainer,{children:[(0,jsx_runtime.jsx)(ArrowButton,{onClick:()=>{isCanGoPrev&&onPrevClick()},disabled:!isCanGoPrev,"data-testid":"prev-button",children:"<<"}),(0,jsx_runtime.jsx)(MonthYearText,{children:"days"===view?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextButton,{onClick:onMonthClick,children:(0,dateHelpers.Ge)(month)}),(0,jsx_runtime.jsx)(TextButton,{onClick:onYearClick,children:year})]}):(0,jsx_runtime.jsx)(TextButton,{onClick:onYearClick,children:title})}),(0,jsx_runtime.jsx)(ArrowButton,{onClick:()=>{isCanGoNext&&onNextClick()},disabled:!isCanGoNext,"data-testid":"next-button",children:">>"})]})};CalendarHeader.__docgenInfo={description:"",methods:[],displayName:"CalendarHeader"};const defaultHolidays=[{date:new Date(2024,0,1),isRecurring:!0},{date:new Date(2024,0,2),isRecurring:!0},{date:new Date(2024,0,7),isRecurring:!1},{date:new Date(2024,2,8),isRecurring:!0},{date:new Date(2024,4,1),isRecurring:!0},{date:new Date(2024,4,9),isRecurring:!0},{date:new Date(2024,4,14),isRecurring:!1},{date:new Date(2024,6,3),isRecurring:!0},{date:new Date(2024,10,7),isRecurring:!1},{date:new Date(2024,11,25),isRecurring:!0}],CalendarBodyContainer=styled_components_browser_esm.Ay.div``,WeekDaysHeader=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 32px;

  color: ${({theme})=>theme.colors.secondary};
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({theme,$isCurrentMonth,$isWeekend,$isHoliday,$isSelected,$isDisabled,$isInRange,$isRangeStart,$isRangeEnd})=>{switch(!0){case $isDisabled:return theme.colors.disabledText;case $isSelected||$isRangeStart||$isRangeEnd:return theme.colors.activeText;case $isInRange:return theme.colors.active;case $isCurrentMonth&&$isWeekend:case $isCurrentMonth&&$isHoliday:return theme.colors.red;case!$isCurrentMonth:return theme.colors.disabledText;default:return theme.colors.secondary}}};

  background-color: ${({theme,$isToday,$isSelected,$isInRange,$isRangeStart,$isRangeEnd})=>{switch(!0){case $isSelected||$isRangeEnd:return theme.colors.active;case $isRangeStart:case $isRangeEnd:return theme.colors.activeBright;case $isInRange:return theme.colors.range;case $isToday:return theme.colors.hoverBackground;default:return"transparent"}}};
  border: none;
  border-radius: ${({theme,$isRangeStart,$isRangeEnd,$isInRange})=>{switch(!0){case $isRangeStart:return theme.bordersRadius.rangeStart;case $isRangeEnd:return theme.bordersRadius.rangeEnd;case $isInRange:return theme.bordersRadius.range;default:return"0.5rem"}}};

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &::before {
    content: "";
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 0.5rem;
    position: absolute;
    background-color: ${({theme})=>theme.colors.active};
    bottom: 0.2rem;
    left: calc(50% - 0.125rem);
    z-index: 0;
    opacity: ${({$hasTask})=>$hasTask?"0.5":"0"};
  }

  &:hover {
    background-color: ${({theme,$isSelected,$isRangeStart,$isRangeEnd})=>!$isSelected&&!$isRangeStart&&!$isRangeEnd&&theme.colors.hoverBackground};
  }

  &:disabled {
    cursor: auto;
    background-color: transparent;
  }
`,CalendarDaysView=({month,year,selectedDate,rangeStart,rangeEnd,onDateSelect,minDate,maxDate,todos=[],withTodos=!1,startWeekOnSunday=!0,highlightWeekends=!1,highlightHolidays=!1,holidays=defaultHolidays})=>{const weekDays=(0,react.useMemo)((()=>(0,dateHelpers.wJ)(startWeekOnSunday)),[startWeekOnSunday]),days=(0,react.useMemo)((()=>(0,dateHelpers.YQ)(year,month,startWeekOnSunday)),[year,month,startWeekOnSunday]),enhancedDays=(0,react.useMemo)((()=>(0,dateHelpers.I3)(days,startWeekOnSunday,minDate,maxDate,holidays)),[days,startWeekOnSunday,minDate,maxDate,holidays]),getDayProps=(({selectedDate,rangeStart,rangeEnd,withTodos,todos,highlightWeekends,highlightHolidays})=>({day,month,year,isCurrentMonth,isToday,isDisabled,isHoliday,isWeekend})=>{const currentDate=new Date(year,month,day),isSelected=selectedDate&&(0,dateHelpers.ny)(selectedDate,currentDate),isRangeStart=rangeStart&&(0,dateHelpers.ny)(rangeStart,currentDate),isRangeEnd=rangeEnd&&(0,dateHelpers.ny)(rangeEnd,currentDate),isInRange=rangeStart&&rangeEnd&&(0,dateHelpers.xR)(currentDate,rangeStart,rangeEnd),hasTask=withTodos&&todos.some((todo=>(0,dateHelpers.ny)(todo.date,currentDate)));return{role:"gridcell",disabled:isDisabled,$isCurrentMonth:isCurrentMonth,$isToday:isToday,$isWeekend:highlightWeekends&&isWeekend,$isHoliday:highlightHolidays&&isHoliday,$isSelected:isSelected,$isInRange:isInRange,$isRangeStart:isRangeStart,$isRangeEnd:isRangeEnd,$isDisabled:isDisabled,$hasTask:hasTask}})({selectedDate,rangeStart,rangeEnd,withTodos,todos,highlightWeekends,highlightHolidays}),handleDateClick=(0,react.useCallback)(((day,month,year)=>{const newSelectedDate=new Date(year,month,day);onDateSelect&&onDateSelect(newSelectedDate)}),[onDateSelect]);return(0,jsx_runtime.jsxs)(CalendarBodyContainer,{children:[(0,jsx_runtime.jsx)(WeekDaysHeader,{children:weekDays.map((day=>(0,jsx_runtime.jsx)(WeekDayCell,{children:day},day)))}),(0,jsx_runtime.jsx)(DatesGrid,{children:enhancedDays.map((dayInfo=>(0,jsx_runtime.jsx)(DayCell,{"data-day":dayInfo.day,"data-month":dayInfo.month,"data-year":dayInfo.year,onClick:()=>handleDateClick(dayInfo.day,dayInfo.month,dayInfo.year),...getDayProps(dayInfo),children:dayInfo.day},`${dayInfo.year}-${dayInfo.month}-${dayInfo.day}`)))})]})};CalendarDaysView.__docgenInfo={description:"",methods:[],displayName:"CalendarDaysView",props:{todos:{defaultValue:{value:"[]",computed:!1},required:!1},withTodos:{defaultValue:{value:"false",computed:!1},required:!1},startWeekOnSunday:{defaultValue:{value:"true",computed:!1},required:!1},highlightWeekends:{defaultValue:{value:"false",computed:!1},required:!1},highlightHolidays:{defaultValue:{value:"false",computed:!1},required:!1},holidays:{defaultValue:{value:"[\n  { date: new Date(2024, 0, 1), isRecurring: true },\n  { date: new Date(2024, 0, 2), isRecurring: true },\n  { date: new Date(2024, 0, 7), isRecurring: false },\n  { date: new Date(2024, 2, 8), isRecurring: true },\n  { date: new Date(2024, 4, 1), isRecurring: true },\n  { date: new Date(2024, 4, 9), isRecurring: true },\n  { date: new Date(2024, 4, 14), isRecurring: false },\n  { date: new Date(2024, 6, 3), isRecurring: true },\n  { date: new Date(2024, 10, 7), isRecurring: false },\n  { date: new Date(2024, 11, 25), isRecurring: true },\n]",computed:!1},required:!1}}};const shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CalendarCell=styled_components_browser_esm.I4.button`
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
`,CalendarMonthsView=({currentMonth,currentYear,onMonthSelect,minDate,maxDate})=>(0,jsx_runtime.jsx)(calendar_months_view_CalendarBodyContainer,{children:shortMonths.map(((month,index)=>{const isDisabled=(0,validation.xm)(index,currentYear,minDate,maxDate);return(0,jsx_runtime.jsx)(CalendarCell,{onClick:()=>((month,isDisabled)=>{isDisabled||onMonthSelect(month)})(index,isDisabled),$isDisabled:isDisabled,$isSelected:currentMonth===index,children:month},month)}))});CalendarMonthsView.__docgenInfo={description:"",methods:[],displayName:"CalendarMonthsView"};const calendar_years_view_styled_CalendarBodyContainer=styled_components_browser_esm.I4.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 32px;

  row-gap: 1rem;
  column-gap: 0.5rem;
`,YearCell=({year,isSelected,isDisabled,onYearSelect})=>(0,jsx_runtime.jsx)(CalendarCell,{onClick:()=>{isDisabled||onYearSelect(year)},$isSelected:isSelected,$isDisabled:isDisabled,children:year});YearCell.__docgenInfo={description:"",methods:[],displayName:"YearCell"};const CalendarYearsView=({currentYear,onYearSelect,minDate,maxDate})=>{const startYear=12*Math.floor(currentYear/12),years=Array.from({length:12},((_,i)=>startYear+i));return(0,jsx_runtime.jsx)(calendar_years_view_styled_CalendarBodyContainer,{children:years.map((year=>{const isDisabled=!(0,validation.Mx)(year,minDate,maxDate);return(0,jsx_runtime.jsx)(YearCell,{year,onYearSelect,isSelected:year===currentYear,isDisabled},year)}))})};CalendarYearsView.__docgenInfo={description:"",methods:[],displayName:"CalendarYearsView"};const CalendarContainer=styled_components_browser_esm.Ay.div`
  padding: 10px;
  width: 250px;
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: ${({$withTodo})=>$withTodo?"0.5rem 0.5rem 0 0":"0.5rem"};
  background-color: ${({theme})=>theme.colors.background};
`,Calendar=({value,rangeStart,rangeEnd,minDate,maxDate,holidays,onDateSelect,onRangeSelect,todos,withTodo=!1,isRange=!1,highlightHolidays=!1,highlightWeekends=!1,startWeekOnSunday=!0})=>{const[view,setView]=(0,react.useState)("days"),{currentMonth,currentYear,handleMonthYearChange}=((value,rangeStart,rangeEnd)=>{const currentDate=value||rangeStart||new Date,[currentMonth,setCurrentMonth]=(0,react.useState)(currentDate.getMonth()),[currentYear,setCurrentYear]=(0,react.useState)(currentDate.getFullYear());return(0,react.useEffect)((()=>{value&&(setCurrentMonth(value.getMonth()),setCurrentYear(value.getFullYear()))}),[value]),(0,react.useEffect)((()=>{rangeStart&&(setCurrentMonth(rangeStart.getMonth()),setCurrentYear(rangeStart.getFullYear()))}),[rangeStart]),(0,react.useEffect)((()=>{rangeEnd&&(setCurrentMonth(rangeEnd.getMonth()),setCurrentYear(rangeEnd.getFullYear()))}),[rangeEnd]),{currentMonth,currentYear,handleMonthYearChange:(newMonth,newYear)=>{setCurrentMonth(newMonth),setCurrentYear(newYear)}}})(value,rangeStart,rangeEnd),changeMonthYear=step=>{switch(view){case"days":{const newMonth=(0,dateHelpers.pJ)(currentMonth,step),newYear=(0,dateHelpers.ib)(currentMonth,step,newMonth,currentYear);handleMonthYearChange(newMonth,newYear);break}case"months":handleMonthYearChange(currentMonth,currentYear+step);break;case"years":handleMonthYearChange(currentMonth,currentYear+12*step)}};return(0,jsx_runtime.jsxs)(CalendarContainer,{$withTodo:withTodo,children:[(0,jsx_runtime.jsx)(CalendarHeader,{month:currentMonth,year:currentYear,view,minDate,maxDate,onPrevClick:()=>changeMonthYear(-1),onNextClick:()=>changeMonthYear(1),onMonthClick:()=>{setView("months")},onYearClick:()=>{setView("years")}}),"days"===view&&(0,jsx_runtime.jsx)(CalendarDaysView,{month:currentMonth,year:currentYear,minDate,maxDate,startWeekOnSunday,highlightWeekends,highlightHolidays,holidays,withTodos:withTodo,todos,selectedDate:isRange?void 0:value,rangeStart:isRange?rangeStart:void 0,rangeEnd:isRange?rangeEnd:void 0,onDateSelect:date=>{(0,dateHelpers.xR)(date,minDate,maxDate)&&(isRange?(date=>{onRangeSelect&&onRangeSelect(date,date)})(date):(date=>{onDateSelect&&onDateSelect(date)})(date))}}),"months"===view&&(0,jsx_runtime.jsx)(CalendarMonthsView,{currentMonth,currentYear,onMonthSelect:month=>{setView("days"),handleMonthYearChange(month,currentYear)},minDate,maxDate}),"years"===view&&(0,jsx_runtime.jsx)(CalendarYearsView,{currentYear,onYearSelect:year=>{setView("months"),handleMonthYearChange(currentMonth,year)},minDate,maxDate})]})};Calendar.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{withTodo:{defaultValue:{value:"false",computed:!1},required:!1},isRange:{defaultValue:{value:"false",computed:!1},required:!1},highlightHolidays:{defaultValue:{value:"false",computed:!1},required:!1},highlightWeekends:{defaultValue:{value:"false",computed:!1},required:!1},startWeekOnSunday:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./src/shared/components/theme-wrapper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ThemeWrapper});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const global=styled_components_browser_esm.DU`
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
`,theme_theme={colors:{primary:"#000000",secondary:"#333333",background:"#ffffff",disabledText:"#aaaaaa",activeText:"#ffffff",active:"#2f80ed",activeBright:"#82B3F4",range:"#eaf2fd",border:"#e1e1e1",hoverBackground:"#2f80ed1a",hoverButton:"#65a7ff",muted:"#f1f1f1",red:"#ff1818"},bordersRadius:{rangeStart:"0.5rem 0 0 0.5rem",rangeEnd:"0 0.5rem 0.5rem 0",range:"0"}},ThemeWrapper=({theme,children})=>{const mergedTheme=(0,react.useMemo)((()=>{return defaultTheme=theme_theme,(customTheme=theme)?{colors:{...defaultTheme.colors,...customTheme.colors},bordersRadius:{...defaultTheme.bordersRadius,...customTheme.bordersRadius}}:defaultTheme;var defaultTheme,customTheme}),[theme]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:mergedTheme,children:[(0,jsx_runtime.jsx)(global,{}),children]})};ThemeWrapper.__docgenInfo={description:"",methods:[],displayName:"ThemeWrapper"}},"./src/shared/utils/dateHelpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ge:()=>getMonthName,I3:()=>enhanceCalendarDays,PK:()=>getDaysInMonth,YQ:()=>getCalendarDays,ib:()=>calculateNewYear,ny:()=>isSameDate,pJ:()=>calculateNewMonth,wJ:()=>getWeekDaysNames,xR:()=>isDateWithinRange});const getDaysInMonth=(year,month)=>new Date(year,month,0).getDate(),createDaysArray=(year,month,length,isCurrentMonth)=>Array.from({length},((_,i)=>({day:i+1,month,year,isCurrentMonth}))),getCalendarDays=(year,month,startWeekOnSunday=!0)=>{const daysInMonth=getDaysInMonth(year,month+1),firstDayOfWeek=((year,month,startWeekOnSunday=!0)=>{const firstDay=new Date(year,month,1).getDay();return startWeekOnSunday?firstDay:0===firstDay?6:firstDay-1})(year,month,startWeekOnSunday),prevMonthDaysArray=((year,month,firstDayOfWeek)=>{const prevMonth=0===month?11:month-1,prevMonthYear=0===month?year-1:year;return Array.from({length:firstDayOfWeek},((_,i)=>({day:new Date(year,month,-i).getDate(),month:prevMonth,year:prevMonthYear,isCurrentMonth:!1}))).reverse()})(year,month,firstDayOfWeek),currentMonthDaysArray=createDaysArray(year,month,daysInMonth,!0),lastDayOfWeek=(firstDayOfWeek+daysInMonth)%7,nextMonthDaysArray=((year,month,remainingDays)=>createDaysArray(11===month?year+1:year,11===month?0:month+1,remainingDays,!1))(year,month,0===lastDayOfWeek?0:7-lastDayOfWeek);return[...prevMonthDaysArray,...currentMonthDaysArray,...nextMonthDaysArray]},getMonthName=month=>new Date(0,month).toLocaleString("en-US",{month:"long"}),getWeekDaysNames=(startWeekOnSunday=!0)=>{const week=["Mo","Tu","We","Th","Fr","Sa"];return startWeekOnSunday?["Su",...week]:[...week,"Su"]},isSameDate=(date1,date2)=>date1.getDate()===date2.getDate()&&date1.getMonth()===date2.getMonth()&&date1.getFullYear()===date2.getFullYear(),isDateWithinRange=(date,minDate,maxDate)=>!(minDate&&date<minDate)&&!(maxDate&&date>maxDate),enhanceCalendarDays=(days,startWeekOnSunday=!0,minDate,maxDate,holidays)=>days.map(((day,index)=>{const currentDate=new Date(day.year,day.month,day.day),isDisabled=!isDateWithinRange(currentDate,minDate,maxDate),isDayHoliday=((date,holidays=[])=>holidays.some((({date:holidayDate,isRecurring})=>isRecurring?holidayDate.getDate()===date.getDate()&&holidayDate.getMonth()===date.getMonth():holidayDate.getDate()===date.getDate()&&holidayDate.getMonth()===date.getMonth()&&holidayDate.getFullYear()===date.getFullYear())))(currentDate,holidays),isDayWeekend=((dayIndex,startWeekOnSunday)=>startWeekOnSunday?0===dayIndex||6===dayIndex:5===dayIndex||6===dayIndex)(index%7,startWeekOnSunday),isDayToday=((year,month,day)=>{const today=new Date;return today.getFullYear()===year&&today.getMonth()===month&&today.getDate()===day})(day.year,day.month,day.day);return{...day,isDisabled,isHoliday:isDayHoliday,isWeekend:isDayWeekend,isToday:isDayToday}})),calculateNewMonth=(currentMonth,step)=>(currentMonth+step+12)%12,calculateNewYear=(currentMonth,step,newMonth,currentYear)=>currentMonth+step<0&&11===newMonth?currentYear-1:currentMonth+step>11&&0===newMonth?currentYear+1:currentYear},"./src/shared/utils/formatDatesHelpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yq:()=>formatDate,_U:()=>parseDate,ay:()=>toDate,l1:()=>formatDateInputValue,zJ:()=>getCalendarTitle});const formatDate=date=>`${String(date.getDate()).padStart(2,"0")}.${String(date.getMonth()+1).padStart(2,"0")}.${date.getFullYear()}`,parseDate=dateString=>{const parts=dateString.split(".");if(3!==parts.length)return null;const day=parseInt(parts[0]??"",10),month=parseInt(parts[1]??"",10)-1,year=parseInt(parts[2]??"",10),date=new Date(year,month,day);return date.getDate()===day?date:null},formatDateInputValue=value=>{const numericValue=value.replace(/\D/g,"");return numericValue.length<=2?numericValue:numericValue.length<=4?`${numericValue.slice(0,2)}.${numericValue.slice(2)}`:`${numericValue.slice(0,2)}.${numericValue.slice(2,4)}.${numericValue.slice(4)}`},getCalendarTitle=(view,year)=>{if("months"===view)return`${year}`;if("years"===view){const startYear=12*Math.floor(year/12);return`${startYear} - ${startYear+11}`}return""},toDate=date=>{if(date)return date instanceof Date?date:new Date(date)}},"./src/shared/utils/validation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JJ:()=>isValidInputLength,Mx:()=>isYearWithinRange,e7:()=>canGoNext,uD:()=>canGoPrev,xm:()=>isMonthDisabled,zv:()=>isValidDateParts});var _dateHelpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/utils/dateHelpers.ts"),_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/utils/formatDatesHelpers.ts");const canGoPrev=(view,year,month,minDate)=>{const parsedMinDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(minDate);if(!parsedMinDate)return!0;if("days"===view)return year>parsedMinDate.getFullYear()||year===parsedMinDate.getFullYear()&&month>parsedMinDate.getMonth();if("months"===view)return year>parsedMinDate.getFullYear();if("years"===view){return 12*Math.floor(year/12)>parsedMinDate.getFullYear()}return!0},canGoNext=(view,year,month,maxDate)=>{const parsedMaxDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(maxDate);if(!parsedMaxDate)return!0;if("days"===view)return year<parsedMaxDate.getFullYear()||year===parsedMaxDate.getFullYear()&&month<parsedMaxDate.getMonth();if("months"===view)return year<parsedMaxDate.getFullYear();if("years"===view){return 12*Math.floor(year/12)+11<parsedMaxDate.getFullYear()}return!0},isYearWithinRange=(year,minDate,maxDate)=>{const parsedMinDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(minDate),parsedMaxDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(maxDate);if(!parsedMinDate&&!parsedMaxDate)return!0;const isAfterMin=!parsedMinDate||year>=parsedMinDate.getFullYear(),isBeforeMax=!parsedMaxDate||year<=parsedMaxDate.getFullYear();return isAfterMin&&isBeforeMax},isMonthDisabled=(month,year,minDate,maxDate)=>{const parsedMinDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(minDate),parsedMaxDate=(0,_formatDatesHelpers__WEBPACK_IMPORTED_MODULE_0__.ay)(maxDate);return!!(parsedMinDate&&year===parsedMinDate.getFullYear()&&month<parsedMinDate.getMonth())||!!(parsedMaxDate&&year===parsedMaxDate.getFullYear()&&month>parsedMaxDate.getMonth())},isValidInputLength=input=>input.length>=10,isValidDateParts=(day,month,year)=>!!(day&&month&&year)&&(!(month<1||month>12)&&(day>=1&&day<=(0,_dateHelpers__WEBPACK_IMPORTED_MODULE_1__.PK)(month,year)))}}]);
//# sourceMappingURL=591.cf60f28d.iframe.bundle.js.map