import { createApp } from 'vue'
import Message from './components/message.vue'
const createMessage = (title) => {
    return new Promise((res, rej) => {
        const handleConfirm = () => {
            messageInstance.unmount(mountNode)
            document.body.removeChild(mountNode)
            res('ok')
        }
        const handleCancel = () => {
            messageInstance.unmount(mountNode)
            document.body.removeChild(mountNode)
            rej('no')
        }
        const messageInstance = createApp(Message, { handleConfirm, handleCancel, title })
        const mountNode = document.createElement('div')
        document.body.appendChild(mountNode)
        messageInstance.mount(mountNode)
    })
}
export default createMessage