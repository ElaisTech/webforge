Dev
ho impostato il dev-server di webpack, così non si dovrà rimodulare tutti i file della dist dopo averla buildata.
Ho impostato inoltre tailwind (postcss) per produrra il file style.css direttamente nella build. 
Non userò il bundler per caricare il css. è lento onload, ma così abbiamo possibilità di essere diretti nella build