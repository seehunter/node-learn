#  程序结构
    -dist
        -assets
        index.html
    -src
        index.js
        components
    -package.json
    -webpack.config.js


    ReactDom.render(组件实例,dom-base)

    react是将组件与数据的耦合结合到一起了

    申明式，组件化，多平台

    系统设计
    提取组件
    子组件设计
    组合组件

    组件设计

1. ui
2. 绑定数据，载入数据
3. 绑定事件
4. 事件数据逻辑处理
5. 
        

#   es6

* let关键字
* string-template   ${变量名}
* arrow-function      单参数    parameter=>{  }    多参数 (param1,          param2)=>{}
* default-parameters  func1(object=pepple)
* destructuring  反向构建  反向传入   var {bread,meat}=this
* 对象常量    var zancan='egg'; var zhongcan='meat'; var wancan='fish';   var fan={zaocan,zhongcan,wancan};
* js--面向对象    function ClassName(param1,param2){}; ClassName.prototype.print=function(){}; ClassName cl=new ClassName(); cl.print();
        四个步骤  1，以类名的函数；2,类原型的函数；new对象；调用方法；

* 箭头函数重写：
        const insideFn = logger => 
            logger("They can be sent to other functions as arguments")
        insideFn(message => console.log(message))

* data-operate varI.join(',');  arr=unit.filter(unit=> trueorflase judge);
  
        const schools = [
        "Yorktown",
        "Washington & Lee",
        "Wakefield"
        ]
        const cutSchool = (cut, list) =>
            list.filter(school => school !== cut)
        console.log(cutSchool("Washington & Lee", schools).join(" * "))
        console.log(schools.join("\n"))

        let schools = [
        { name: "Yorktown"},
        { name: "Stratford" },
        { name: "Washington & Lee"},
        { name: "Wakefield"}
    ]

    const editName = (oldName, name, arr) =>
        arr.map(item => {
            if (item.name === oldName) {
                return {
                    ...item,
                    name
                }
            } else {
                return item
            }
        })
    let updatedSchools = editName("Stratford", "HB Woodlawn", schools)
    console.log( updatedSchools[1] )
    console.log( schools[1] )

    const ages = [21,18,42,40,64,63,34]
    const maxAge = ages.reduce((max, age) => {
      console.log(`${age} > ${max} = ${age > max}`)
      if (age > max) {
          return age
      } else {
          return max
      }
    }, 0)
    console.log('maxAge', maxAge)

       const createClockTime = date => ({date})

    const appendAMPM = ({date}) =>
        ({
            date,
            ampm: (date.getHours() >= 12) ? "PM" : "AM"
        })

    const civilianHours = clockTime => {
      const hours = clockTime.date.getHours()
      return {
        ...clockTime,
        hours: (hours > 12) ?
          hours - 12 :
          hours
      }
    }

    const removeDate = clockTime => {
      let newTime = {...clockTime}
      delete newTime.date
      return newTime
    }
    // Not the best way to compose all of these into one function
    const oneFunction = date =>
        removeDate(
            civilianHours(
                appendAMPM(
                    createClockTime(date)
                )
            )
        )
    console.log(oneFunction(new Date()))



    map,filter,Object.keys(object).map(arrow-function),arr.reduce;

### redux
1. 状态化组件，是状态可预测化
