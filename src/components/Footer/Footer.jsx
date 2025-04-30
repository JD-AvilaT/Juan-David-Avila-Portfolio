import './Footer.css';
import Copy from '/public/icons/copy.svg?react';

export function Footer() {
    const handleCopy = () => {
        navigator.clipboard.writeText('jdavilat2003@gmail.com')
          .then(() => {
            // ✅ Opcional: feedback visual o toast
            console.log('Correo copiado al portapapeles');
          })
          .catch((err) => {
            console.error('Error al copiar:', err);
          });
      };

    return(
        <div className='footer'>
            <p className='footer-name'>Juan David Avila Tamayo</p>
            <a className='footer-email'>
                <p onClick={handleCopy}>jdavilat2003@gmail.com</p>
                <Copy className='copy-icon'/>
            </a>
        </div>
    )
}