const { createClient } = supabase
        supabase = createClient("https://byxqextqmaciupdsfcjh.supabase.co", ANON_KEY)
      
        const form = document.querySelector('#user-form')
        form.addEventListener('submit', async (event) => {
            event.preventDefault()

            const formInputs = form.querySelectorAll('input, select, textarea')

          let submision = {}

          formInputs.forEach(element => {
            const { value, name } = element
            if (value) {
                submision[name] = value
            }
          })

          const { error } = await supabase.from('Tsanrofess').insert([submision], { returning: 'minimal'})

          if (error) {
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'Gagal mengirim pesan, coba lagi',
            })
          } else {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Mengirim Pesan',
            })
          }

          formInputs.forEach(element => element.value = '')

      })