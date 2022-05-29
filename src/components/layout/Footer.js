

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-conter">
        <div>
            <p>Copyright &copy; {year} Tout droit reservé</p>
        </div>


    </footer>
  )
}

export default Footer
