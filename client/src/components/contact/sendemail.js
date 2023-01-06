import emailjs from '@emailjs/browser';
export const sendEmailFn =(form)=> {
    return(
        emailjs.sendForm('service_y9r07hh', 'template_q4yd01o', form.current, 'q77InxKC68cDWyDwm')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
    );
}