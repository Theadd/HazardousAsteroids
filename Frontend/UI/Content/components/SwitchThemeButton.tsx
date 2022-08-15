
type PropTypes = {
    theme: string
    onClick: (theme: string) => void
}

const SwitchThemeButton = ({ theme, onClick }: PropTypes) => {

  return (
    <button 
        onClick={ () => onClick(theme) }
        onMouseEnter={ () => onClick(theme) }
        title={ theme }
        className="btn btn-sm btn-circle bg-base-100 text-base-content bordered opacity-30 hover:opacity-100" 
        data-theme={ theme }>A<span className='theme-color-drop text-primary'>⬤</span><span className='theme-color-drop-small text-accent'>⬤</span></button>
  )
}

export { SwitchThemeButton }
