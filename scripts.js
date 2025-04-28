function toggleExpand(button){
  const projectContent = button.closest('.project-content');
  projectContent.classList.toggle('expanded');
  if(projectContent.classList.contains('expanded')){
    button.textContent = "Show less";
  }else{
    button.textContent = "Shoe more"
  }
  
}
