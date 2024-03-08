import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, ProductType } from "../../types/ProductType";

interface CartStateType  {
    items: CartItemType[]
    }

const initialState: CartStateType = {
    items:[]
}

export const cartSlise = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(store, actions:PayloadAction<ProductType>)=>{
            const findedIndex = store.items.findIndex((item)=> item.id === actions.payload.id)
            const updatedItems = [...store.items]
            if (findedIndex !== -1 && updatedItems[findedIndex].count < updatedItems[findedIndex].stock ){                
                updatedItems[findedIndex].count++
                store.items = updatedItems
            }else if(findedIndex !== -1 && updatedItems[findedIndex].count >= updatedItems[findedIndex].stock ){
                store.items = [...store.items]
            }else{
                store.items = store.items.concat({...actions.payload, count:1})}
             
            },
        increase:(store, actions:PayloadAction<number>)=>{
            const findedIndex = store.items.findIndex((item)=> item.id === actions.payload)
            const updatedItems = [...store.items]
            if (findedIndex !== -1 && updatedItems[findedIndex].count < updatedItems[findedIndex].stock ){                
                updatedItems[findedIndex].count++
                store.items = updatedItems
            }
        },
        dicrease:(store, actions:PayloadAction<number>)=>{
            const findedIndex = store.items.findIndex((item)=> item.id === actions.payload)
            const updatedItems = [...store.items]
            if (findedIndex !== -1 && updatedItems[findedIndex].count > 1){                
                updatedItems[findedIndex].count--
                store.items = updatedItems
            }else{
                store.items = [...updatedItems.slice(0, findedIndex), ...updatedItems.slice(findedIndex + 1)]
            }
        },
        remove:(store, actions:PayloadAction<number>)=>{
            const findedIndex = store.items.findIndex((item)=> item.id === actions.payload)
            const updatedItems = [...store.items]
            store.items = [...updatedItems.slice(0, findedIndex), ...updatedItems.slice(findedIndex + 1)]
        },
        clean:(store)=>{
            store.items=[]
        }}
})

export const {addItem, increase, dicrease, remove, clean} = cartSlise.actions
export const cartReducer = cartSlise.reducer