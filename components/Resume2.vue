<template>
    <div>
      <div v-for="item in arr" :key="item.id">
        {{ item.name }}: {{ item.count }}
        <button @click="updateName(item)">Update Name</button>
      </div>
    </div>
  </template>
  
  <script setup>
  
  let arr = reactive({});
  arr[1] = { id: 1, name: 'Object 1', count:0 };
  arr[2] = { id: 2, name: 'Object 2', count:0 };
  
  const updateName = (item) => {
    // console.log('%citem: %o', 'color: red;font-size:12px', item);
    // console.log('%carr: %o', 'color: red;font-size:12px', arr);
    try {
        arr[item.id].count++;
    } catch (error) {
        console.log(error);
    }
  };
  </script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

#resume {
    scroll-margin-top: 50px;
    background-color: $darkblue;
    
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }
    .content {

        margin-bottom: 15px;
        margin-top: 20px;
        
        @media only screen and (max-width: $md) {
            margin-bottom: 0;
            margin-top: 20px;
        }
        
        ul.work-table {
            text-align: center;
            color: $white;
            padding-bottom: 20px;
            &:last-child {
                padding-bottom: 0;
            }

            @media only screen and (max-width: $md) {
                &:last-child {
                    padding-bottom: 8px;
                }
            }
            
            > li {
                padding: 11px;
                border-bottom: 1px solid $lightblue;
                font-size: 18px;
                span {
                    color: $yellow;
                    @media only screen and (max-width: $md) {
						display: block;
                        font-weight: bold;
					}
                    
                    .arrow {
                        border: solid $yellow;
                        border-width: 0 2px 2px 0;
                        display: inline-block;
                        padding: 3px;
                    }

                    .right {
                        transform: rotate(-45deg);
                        -webkit-transform: rotate(-45deg);
                    }

                    .left {
                        transform: rotate(135deg);
                        -webkit-transform: rotate(135deg);
                    }

                    .up {
                        transform: rotate(-135deg);
                        -webkit-transform: rotate(-135deg);
                    }

                    .down {
                        transform: rotate(45deg);
                        -webkit-transform: rotate(45deg);
                    }
                }

                &.date-table {
                    color: $darkblue;
                    border-bottom: none;
                    padding: 6px;
                    background-color: $yellow;
                    font-size: 24px;
                }

                &.company-name {
                    font-size: 24px;
                    font-weight: bold;
                }

                &:last-child {
                    border-bottom:0;
                }
                
                &.desc {
                    span {
                        cursor: pointer;
                    }
                   
                    div {
                        padding-top: 10px;
                        display: none; 
                        max-width: 770px;
                        margin:auto;
                        text-align: center;
                        &.showhide {
                            display: block;
                        }
                        li {
                             padding-bottom: 20px;
                             
                             &:last-child {
                                padding-bottom: 0;
                             }
                        }
                        li:before {
                            content: '>> ';
                            font-weight: bold;
                            color: $yellow;
                        }
                    }
                }
            }
        }
    }
}

</style>
