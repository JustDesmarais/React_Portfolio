import NavTabs from '/src/components/NavTabs'

function Header() {
    return (
        <header class="container-fluid bg-primary">
            <div class="row justify-content-between" style={{height: '100px'}}>
                <h1 class="col-4">Justin Desmarais</h1>
                <NavTabs />
            </div>
        </header>
    )
}

export default Header;