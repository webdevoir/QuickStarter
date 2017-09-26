class Api::ProjectsController < ApplicationController
  def index
    if params[:category]
      @projects = projects.where(params[:category] = project.category)
    else
      @projects = Project.all
    end
    render :index
  end

  def create
    @project = Project.new(project_params)
    @project.days_left = self.days_left
    @project.author_id = current_user.id
    @project.total
    if @project.save
      render :show
    end
  end

  def new
    render :new
  end

  def show
    @project = Project.find(params[:id])
  end

  def update
  @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      p @project.total_funded
      render :show
    else
      render @project.errors.full_messages
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :funding_deadline, :funding_goal, :description, :category, :total_funded)
  end
end
