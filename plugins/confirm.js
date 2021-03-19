// const confirmModal = $.modal({
//     title: 'Are you sure?',
//     closable: 'true',
//     width: '400px',
//     footerButtons: [
//         {text: 'Cancel', type: 'secondary', handler() {
//                 confirmModal.close()
//             }},
//         {text: 'Delete', type: 'danger', handler() {
//                 confirmModal.close()
//             }}
//     ]
// })

$.confirm = function(options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {text: 'Cancel', type: 'secondary', handler() {
                modal.close()
                reject()
            }},
        {text: 'Delete', type: 'danger', handler() {
                modal.close()
                resolve()
            }}
            ]
        })

        setTimeout(() => modal.open(), 100)
    })

}