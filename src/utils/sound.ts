import {RootsRev,Chords,Roots} from '../Chord.yml'

export function getRootByNum(num:number):string{
    return typeof RootsRev == 'object' ? RootsRev[num]:RootsRev
}
export function getRouteStringsArrayByChord(arg:string):string[]{
    let root = arg.slice(0, 2); //先頭2文字
    let structure = arg.slice(1); //先頭以外
    if (root.slice(-1) === "#" || root.slice(-1) === "b") {
        structure = structure.slice(1); //先頭以外(余分カット)
    } else {
        root = root.slice(0, 1); //先頭のみ(余分カット)
    }
    console.log("ルート: " + root);
    console.log("構成: " + structure);
    const noteList:number[] = [...Chords[structure]]; //Chordsを元に配列を新しく生成
    return noteList.map((RootNum)=>getRootByNum(
            RootNum + Roots[root])
        +'3')

}