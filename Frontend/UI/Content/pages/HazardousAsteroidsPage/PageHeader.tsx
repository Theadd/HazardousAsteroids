import { GithubIconSvg } from '../../components/SvgIcons'
import { SwitchThemeButton } from '../../components/SwitchThemeButton'

const handleThemeChange = (theme: string): void => {
  document.body.parentElement!.dataset.theme = theme
}

// All DaisyUI themes
// const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']

// Custom subset of DaisyUI themes, see `tailwind.config.cjs` in order to add/remove themes from this list
const themes = ['business', 'corporate', 'halloween', 'emerald', 'aqua', 'fantasy']

const PageHeader = () => {

  return (
    <header className='prose min-w-full bg-base-300 xl:bg-transparent items-center text-[0.5rem] sm:text-xs md:text-base'>
      <div className='w-full flex bg-transparent flex-row px-2 sm:px-5 pt-2 sm:pt-5'>
        <div className='justify-start flex-grow space-x-4 hidden sm:flex'>
          {
            themes.map(theme => (
              <SwitchThemeButton key={ theme } onClick={ handleThemeChange } theme={ theme } />
            ))
          }
        </div>
        <div className='justify-end'>
          <a className='opacity-30 hover:opacity-100' href='https://github.com/Theadd/HazardousAsteroids'>
            <GithubIconSvg className='h-5 sm:h-8 w-5 sm:w-8' />
          </a>
        </div>
      </div>
      <div className='w-full pt-2 pb-4 sm:pt-8 md:pt-16 md:pb-8 px-0 sm:px-4'>
        <h1 className='text-center text-accent whitespace-nowrap'>HAZARDOUS ASTEROIDS</h1>
      </div>
    </header>
  )
}

export { PageHeader }
