// main.js

import * as stories from './components'

const ComponentLibrary = {
    install(Vue = {}) {
        // components
        for (const componentName in stories) {
            const component = stories[componentName]

            Vue.component(component.name, component)
        }
    }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}