module ShipmentsHelper

  def delivery_icon(due_at = nil, accomplished_at = nil)
    return nil unless due_at && accomplished_at
    if accomplished_at.to_date <= due_at.to_date
      "<i style='font-size: 20px;' class='fas fa-check-circle kt-font-info'></i>".html_safe
    else
      "<i style='font-size: 20px;' class='fas fa-exclamation-circle kt-font-warning'></i>".html_safe
    end
  end

end
