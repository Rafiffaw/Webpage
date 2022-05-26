const { createClient } = supabase
        supabase = createClient("https://byxqextqmaciupdsfcjh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eHFleHRxbWFjaXVwZHNmY2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg1MTc3NTIsImV4cCI6MTk2NDA5Mzc1Mn0.-TMpLYhoChEIHPBI9Ixpj8m_zr6xJ57byNLbQiOl0QI")
      
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

          const { error } = await supabase.from('tsanrofess').insert([submision], { returning: 'minimal'})

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
