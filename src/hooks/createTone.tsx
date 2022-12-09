import * as Tone from 'tone';
export default function createTone(){
    Tone.PolySynth()
}
import {createSignal} from "solid-js";
import {Sampler} from "tone";

export function useGetSoundPlayer (){
    // const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
return {PlayFocus:()=>{},
stopFuncs:()=>{}}
}
export function useSampler(){}
export function createSampler(){
    const [sampler] = createSignal<Sampler>(new Tone.Sampler({
}).toDestination())}
export function useGetNoteList(){}
export function usePlay(){}
export function useStop (){}
