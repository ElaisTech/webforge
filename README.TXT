Dev
ho impostato il dev-server di webpack, così non si dovrà rimodulare tutti i file della dist dopo averla buildata.
Ho impostato inoltre tailwind (postcss) per produrra il file style.css direttamente nella build. 
Non userò il bundler per caricare il css. è lento onload, ma così abbiamo possibilità di essere diretti nella build

_______

I have set up the webpack dev-server, so we won't need to rebuild all the files in the dist directory after each build. 
I also configured Tailwind (postcss) to produce the style.css file directly in the build. 
I won't use the bundler to load the CSS. It's slower on load, but this way we have the ability to be more direct in the build process.
