import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App'

test('App has a .page-wrap class', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })

  expect(app.classes()).toContain('page-wrap')
})
