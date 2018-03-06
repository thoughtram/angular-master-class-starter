DATE=`date +%d-%m-%Y_%H-%M-%S`

git push -f meta jump-start:amc_jump-start_$DATE
git push -f meta architecture:amc_architecture_$DATE
git push -f meta observables:amc_observables_$DATE
git push -f meta forms:amc_forms_$DATE
git push -f meta routing:amc_routing_$DATE
git push -f meta redux:amc_redux_$DATE
git push -f meta ngrx:amc_ngrx_$DATE
git push -f meta testing:amc_testing_$DATE
