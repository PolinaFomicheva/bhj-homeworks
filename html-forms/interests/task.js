  const checkbox = Array.from(document.getElementsByClassName('interest__check'));

  function checkedParents(e) {
      let check = e.target;
  
      if (!checkbox.indexOf(check)) {
          return;
      } else {
          while (check) {
              const parent = check.closest('ul').parentElement.querySelector('input');
              const sibling = Array.from((parent.closest('li').querySelector('ul')).querySelectorAll('input'));
              const status = sibling.map(elem => elem.checked === true);
              const every = status.every(elem => elem === true);
              const some = status.some(elem => elem === true);
              parent.checked = every;
  
              if (!every && every !== some) {
                  parent.indeterminate = true;
              } else {
                  parent.indeterminate = false;
              };
  
              if (check != parent) {
                  check = parent;
              } else {
                  check = 0;
              };
          };
      }
  }
  
  function checkedChildren(e) {
      const children = e.target.closest('.interest').querySelectorAll('input');
      if (this.checked === true) {
          for (let index of children) {
              index.checked = true;
          };
      } else {
          for (let index of children) {
              index.checked = false;
          };
      }
  }
  
  for (let index of checkbox) {
      index.addEventListener('change', checkedChildren);
      index.addEventListener('change', checkedParents);
  };



// первый вариант решения(простое)
// const interests = document.querySelectorAll('.interests_active');

// for (let i = 0; i < interests.length; i++) {
//   let check = interests[i].closest('.interest').firstElementChild.firstElementChild;
//   let items = interests[i].querySelectorAll('.interest__check');
//   console.log(check);
//     check.addEventListener('change', function(e) {
//       const checked = e.target.checked;
//       console.log(checked)
//         for (let i = 0; i < items.length; i++) {
//             let item = items[i];
//             item.checked = checked
//         }
//     });
//   }