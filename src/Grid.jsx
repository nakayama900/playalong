import {For} from 'solid-js'
import {gridStyle, jsxdata} from "./Grid.data.yaml";
import {HeadCard} from "./HeadCard.jsx";
import {Card} from "./Card.jsx";
import {Box, Divider} from "@suid/material";
import * as Tone from 'tone';
import {useGetNoteList} from './hooks/useChordPlayer'
import A3 from './hooks/sounds/A3.mp3'
import A4 from './hooks/sounds/A4.mp3'
import C3 from './hooks/sounds/C3.mp3'
import { getRouteStringsArrayByChord } from './utils/sound'
import { useSampler } from "hooks/createTone";


export const Grid = () => {
    // for (let i = 0; i < 6; i++) {
    // [...Array(6)].map(_);
    console.log(jsxdata)
    const synth = new Tone.PolySynth().toDestination();
    const sampler = new Tone.Sampler({
        urls: {
            A3: A3, A4: A4,C3:C3,
        }
    }).toDestination()
    return (<div id="gridParent" style={gridStyle}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
                m: 1.5,
            },
            '& hr': {
                mx: 0.5,
            },
        }}>
            <For each={jsxdata}>
                {(item, index) => (<>
                    <Box sx={{
                        display: 'block'
                    }}>
                        <HeadCard>ヘッド{(() => index() + 1)()}</HeadCard>
                        {console.log('item:', item)}
                        <For each={item}>
                            {(initem, inindex) => (<>
                                {console.log('number:', index() * 6 + inindex()+'\n',`
                                ${initem}'s note: ${getRouteStringsArrayByChord(initem)}`)}
                                <Card
                                    onClick={() => {// set the attributes across all the voices using 'set'
                                        synth.set({detune: -1200});// play a chord
                                        console.log(getRouteStringsArrayByChord(initem))
                                        sampler.triggerAttackRelease(getRouteStringsArrayByChord(initem), 1);
                                    }}
                                    onMouseEnter={() => {
                                        // synth.set({detune:-1200})
                                    }}
                                    onMouseLeave={() => {
                                    }}
                                    num={() => (index() * 6 + inindex())}>{initem}</Card><Divider></Divider></>)}
                        </For>
                    </Box>
                </>)}
            </For></Box>
    </div>);
};
/*return(
        <div id="gridParent" style={gridStyle}> 
                
                
            
        </div>
    )
}*/
