<template>
  <div>
    <RightList :list="list" @select="handelselect"/>
  </div>
</template>
<script>
import RightList from './RightList.vue';
export default {
  components: {
    RightList,
  },
  methods: {
    handelselect(item) {
      console.log(item);
    },
  },
  data() {
    return {
      list:[
        {name:"a",isSelect:false},
        {name:"b",isSelect:false},
        {name:"c",isSelect:true,
        children:
        [{name:"c-1",isSelect:false},
          {name:"c-2",isSelect:false,
          children:[
            {name:"c-2-1",isSelect:false},
            {name:"c-2-2",isSelect:false},
            {name:"c-2-3",isSelect:false},
            {name:"c-2-4",isSelect:false},
          ]},
          {name:"c-3",isSelect:false},
          {name:"c-4",isSelect:false},
        ]},
        {name:"d",isSelect:false},

      ]
    };
  },

};
</script>