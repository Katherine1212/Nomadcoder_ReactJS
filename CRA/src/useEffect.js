import { useState, useEffect } from 'react';

function UseEffect() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");
    // 최초 로딩 시에만 작동(1회성) []에 아무 것도 없어서
    useEffect(() => {
        console.log("Try only once");
    }, []);
    const [keyword, setKeyword] = useState("");
    // keyword가 변경 될 때 작동
    useEffect(() => {
        // 키워드가 1자라도 있고 길이가 5자 이상일 때
        if (keyword !== "" && keyword.length > 5) {
            console.log("keyword=> ", keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log("i run when keyword changes");
    }, [keyword]);
    useEffect(() => {
        console.log("i run when counter changes");
    }, [counter]);
    return (
        <div>
            <hr />
            <h1>useEffect</h1>
            <input
                type="text"
                placeholder='Search here'
                value={keyword}
                onChange={onChange}

            />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div >
    );
}

export default UseEffect;
