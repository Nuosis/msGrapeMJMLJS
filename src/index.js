import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import grapesJSMJML from 'grapesjs-mjml'

grapesJS.init({
   fromElement: true,
   container: '#gjs',
   plugins: [grapesJSMJML],
   pluginsOpts: {
      [grapesJSMJML]: {/* ...options */}
   },
});