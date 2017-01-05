import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/js/components/TodoList"
import { TodoStore } from "../src/js/store/TodoStore"

describe("TodoList.functional", () => {

  it("filters todos", () => {
    const store = new TodoStore()

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.filter = "3"

    const wrapper = shallow(<TodoList store={store} />)

    expect(wrapper.find("li").length).toBe(1)
    expect(wrapper.find("li span").at(0).text()).toBe("todo3")
  })
})
