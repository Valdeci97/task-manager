npx -y tsc

if [ $? != 0 ]; then
  echo "Ocorreu um erro ao compilar o TypeScript, verifique seu código e tente novamente"
  exit 1
fi

# $? is a variable holding the return value of the last command you ran. In my case it is "npx -y tsc" font: https://stackoverflow.com/questions/7383144/what-does-give-us-exactly-in-a-shell-script
# code source: https://github.com/tryber/sd-015-a-trybe-futebol-clube/blob/main/app/backend/tsc_eval.sh
