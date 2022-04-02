
export default function alert () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzTI8T1gk-eqcOpP8Lc-HInZ4oEDjoNsZuNP_5sj84G6EC38bdSPqiXAzq3jfuOQYbe/exec'
    const form = document.forms['google-sheet']
        
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        Swal.fire({
            title: 'Terima Kasih',
            text: 'Pesan Anda Telah Terkirim',
            icon: 'success',
        })
    })
}