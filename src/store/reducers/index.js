import { 
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    SET_TITLE,
    SET_EDIT,
    SET_ERROR,
    SET_ITEM
} from '../actions/actionTypes';

const initialState = {
    items: [],
    title: "",
    item: "",
    edit: false,
    error: ""
}

const items = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            const newitem = {
                id: Date.now(),
                value: state.title
            }
            
            return {
                ...state,
                items: state.items.concat(newitem),
                title: "",
                error: ""
            }

        
        case EDIT_ITEM:
            var newList = [...state.items];
            var index = newList.indexOf(state.item);
            if(index !== -1){
                newList[index].value = state.title;
                return {
                    ...state,
                    title: "",
                    edit: false,
                    items: newList,
                    error: ""
                }
            } else {
                return {
                    ...state
                }
            }
        case DELETE_ITEM:
            newList = [...state.items];
            index = newList.indexOf(state.item);
            if(index !== -1){
                newList.splice(index,1);
                return {
                    ...state,
                    items: newList  
                }
            } else {
                return {
                    ...state
                }
            }
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.item,
                error: ""
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_EDIT:
            return {
                ...state,
                edit: true,
                error: ""
            }
        default: 
            return state;
            
    }
}

export default items;
