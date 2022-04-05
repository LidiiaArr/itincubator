

function App() {
    const Button1Foo=(subscriber:string,age:number,address:string)=>{
        console.log(subscriber, age)
    }
    const Button2Foo=(subscriber:string)=>{
        console.log(subscriber)
    }

    const Button3Foo=()=>{
        console.log('Im Stupid Button')

    }
    return (
        <div className="App">

            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21,'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Ivan')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>
    );
}

type ButtonType={
    name:string
    callBack:()=>void
}

export const Button=(props:ButtonType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}