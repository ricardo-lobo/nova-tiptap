window.pretty = require('pretty');
window._ = require('lodash');
window.axios = require('axios');

const attachPortalTarget = () => {
    if (typeof document === undefined) return
    if (document.querySelector('#portal-target')) return
    const div = document.createElement('div');
    document.querySelector('body').prepend(div)
}

Nova.booting((Vue, router) => {
    attachPortalTarget()

    Vue.component('detail-tiptap', require('./components/DetailField.vue').default);
    Vue.component('form-tiptap', require('./components/FormField.vue').default);
})

if (typeof Nova.config.novaTiptap === 'object') {
    if (typeof Nova.config.novaTiptap.translations === 'object') {
        Object.assign(Nova.config.translations, Nova.config.novaTiptap.translations)
    }
}
