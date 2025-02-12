
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (<nav>
    <NavLink to="/"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba6eb16e-7880-45c2-8b26-10db799d9085/d8b80js-2dfedb77-dcb9-42c2-b1c9-241d0bc91866.png/v1/fill/w_300,h_300,strp/studio_ghibli_logo_pixel_art_by_beausaur_d8b80js-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwIiwicGF0aCI6IlwvZlwvYmE2ZWIxNmUtNzg4MC00NWMyLThiMjYtMTBkYjc5OWQ5MDg1XC9kOGI4MGpzLTJkZmVkYjc3LWRjYjktNDJjMi1iMWM5LTI0MWQwYmM5MTg2Ni5wbmciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PvBO7xf9sCgTfSQOqEAGgCrZKlxvJra0-Omxj0ym5Ps" alt="Home"/></NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/people">People</NavLink>
    <NavLink to="/locations">Locations</NavLink>

  </nav>);
};