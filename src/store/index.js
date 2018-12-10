import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store=new Vuex.Store({
	state:{
		ProMenuLeftList:[],
		bidType:1,
		DeDataList:[],
		DeData2List:[],
		deinfo:0,
		findList:[]
	},
	mutations:{
		PRO_CHANGE(state,payload){
			state.ProMenuLeftList=payload;
		},
		Type_CHANGE(state,payload){
			state.bidType=payload;
		},
		DeDataList_CHANGE(state,payload){
			state.DeDataList=payload;
		},
		DeData2List_CHANGE(state,payload){
			state.DeData2List=payload;
		},
		DEINFO_CHANGE(state,payload){
			state.deinfo=payload;
		},
		FindList_CHANGE(state,payload){
			state.findList=payload;
		}

	}
})

export default store