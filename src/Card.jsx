// import { useEffect } from "react";
// import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import {useGetNoteList, useGetSoundPlayer, usePlay, useStop} from "./hooks/createTone"
import {Button} from "@suid/material"

export const Card = (props) => {
    const CardStyle = {
        textAlign: "center",
        border: "1px solid #0F4C75",
        width: "250px",
        height: "100px",
        backgroundColor: "#BBE1FA",
        padding: "1px"
    }

    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const EnterChangeColor = () => { //カード要素にカーソルが入ってきたら背景色をオレンジにするコード
        // const target = document.getElementsByClassName("card"); //ここの変数targetには'Grid.js'で使った"Card"コンポーネントをすべて含む配列が入る。
        // target[props.num].style.backgroundColor = "orange"; //targetには全ての"Card”コンポーネントが入ってるので'props.num'で識別する。
        // console.log("test2");
        // playChord(getNoteList(props.children));
    }
    const LeaveChangeColor = () => { //カード要素からカーソルが離れたら色を元に戻すコード
        // const target = document.getElementsByClassName("card");
        // target[props.num].style.backgroundColor = "#BBE1FA";
        // stopChord(getNoteList(props.children));
    }

    const ClickEvent = () => { //カードがクリックされたら、ヘッダーにクリックされたカードの要素名を追加。 ヘッダーを親要素としてspanタグを子要素に加えて追加していく。
        const DisplayCards = document.getElementsByClassName("DisplayCard");
        for (let i = 0; i < 4; i++) { //htmlのdata属性にはdatasetを参照する必要がある
            if (DisplayCards[i].dataset.occupied == "false") {
                DisplayCards[i].innerHTML = props.children;
                DisplayCards[i].dataset.occupied = "true";
                break;
            }
        }
    }
    return (
        <>
            <Button draggable="true" class="card"
                    variant={'outlined'}
                    style={CardStyle}
                // onClick={props.onClick}
                    onClick={()=>{
                        props.onClick&&props.onClick()
                        ClickEvent()}}
                // onMouseEnter={EnterChangeColor}
                    onMouseEnter={async () => {
                        props.onMouseEnter&&props.onMouseEnter();
                        EnterChangeColor()
                    }}
                // onMouseLeave={LeaveChangeColor}
                    onMouseLeave={async () => {
                        props.onMouseLeave&&props.onMouseLeave();
                        LeaveChangeColor()
                    }}
                    onDragStart={(event) => (
                        event.dataTransfer.setData('text/plain', event.target.innerHTML))}>{props.children}</Button>
        </>
    )
};

export default Card;
