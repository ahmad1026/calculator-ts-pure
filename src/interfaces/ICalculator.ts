import { button } from "./Buttons";



export interface ICalculator{
    leftNum:number
    rightNum:number
    actionPressed(btn:button):string

}